// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";

contract Property is ERC721Base {
    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    )
        ERC721Base(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps
        )
    {}

    struct Lesson {
        address creator;
        string notes;
        bool ispublished;
        string name;
    }

    struct Exercise {
        string question;
        Answer[] answers;
    }

    struct Answer {
        string text;
        bool isCorrect;
    }

    struct Review {
        string message;
        uint256 stars;
    }

    mapping(uint256 => Lesson) public lessons;
    mapping(uint256 => mapping(address => Review)) public lessonsReviews;
    mapping(uint256 => mapping(uint256 => Exercise)) public exercises;
    uint256 public exercisesCount = 0;
    uint256 public lessonsCount = 0;

    event createLessonE(string notes, string name);

    function createLesson(string memory notes, string memory name) public {
        lessons[lessonsCount++] = Lesson(msg.sender, notes, false, name);
        emit createLessonE(notes, name);
    }

    event addExerciseE(
        uint256 lessonId,
        string question,
        string[] answerTexts,
        bool[] isCorrect
    );

    function addExercise(
        uint256 lessonId,
        string memory question,
        string[] memory answerTexts,
        bool[] memory isCorrect
    ) public {
        require(lessonId < lessonsCount, "Lesson does not exist");
        require(
            msg.sender == lessons[lessonId].creator,
            "Only the creator can add exercises"
        );
        require(
            answerTexts.length == isCorrect.length,
            "Mismatched answer arrays"
        );

        Exercise storage newExercise = exercises[lessonId][exercisesCount++];
        newExercise.question = question;

        for (uint256 i = 0; i < answerTexts.length; i++) {
            newExercise.answers.push(Answer(answerTexts[i], isCorrect[i]));
        }

        emit addExerciseE(lessonId, question, answerTexts, isCorrect);
    }

    event addReviewE(uint256 lessonId, string message, uint256 stars);

    function addReview(
        uint256 lessonId,
        string memory message,
        uint256 stars
    ) public {
        require(lessonId < lessonsCount, "Lesson does not exist");
        require(stars >= 1 && stars <= 5, "Stars should be between 1 and 5");

        lessonsReviews[lessonId][msg.sender] = Review(message, stars);
        emit addReviewE(lessonId, message, stars);
    }
}
