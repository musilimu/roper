// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";

contract Property is ERC721Base {
    uint256 propertiesSize;
    uint256 propertyAddressessSize;

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

    mapping(uint256 => Lesson) lessons;
    mapping(uint256 => mapping(address => Review)) lessonsReviews;
    mapping(uint256 => mapping(uint256 => Exercise)) exercises;
    uint256 public exercisesCount = 0;
    uint256 public lessonsCount = 0;

    function getLessons() public view returns (Lesson[] memory) {
        Lesson[] memory lessons_ = new Lesson[](lessonsCount);
        for (uint256 i = 0; i < lessonsCount; i++) {
            lessons_[i] = lessons[i];
        }
        return lessons_;
    }

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

    function getExercises(
        uint256 lessonId
    ) public view returns (Exercise[] memory) {
        require(lessonId < lessonsCount, "Lesson does not exist");

        Exercise[] memory lessonExercises = new Exercise[](exercisesCount);
        for (uint256 i = 0; i < exercisesCount; i++) {
            lessonExercises[i] = exercises[lessonId][i];
        }
        return lessonExercises;
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

    function getReviews(
        uint256 lessonId
    ) public view returns (Review[] memory) {
        require(lessonId < lessonsCount, "Lesson does not exist");

        uint256 numReviews = 0;
        address[] memory reviewers = new address[](lessonsCount);

        for (uint256 i = 0; i < lessonsCount; i++) {
            if (lessonsReviews[lessonId][msg.sender].stars > 0) {
                reviewers[numReviews] = msg.sender;
                numReviews++;
            }
        }

        Review[] memory lessonReviews = new Review[](numReviews);

        for (uint256 i = 0; i < numReviews; i++) {
            address reviewer = reviewers[i];
            lessonReviews[i] = lessonsReviews[lessonId][reviewer];
        }

        return lessonReviews;
    }
}
