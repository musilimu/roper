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
    mapping(uint256 => mapping(uint256 => Review)) lessonsReviews;
    mapping(uint256 => mapping(uint256 => Exercise)) exercises;
    uint256 public exercisesCount = 0;
    uint256 public lessonsCount = 0;

    function getLessons() public view returns (Lesson[] memory) {
        Lesson[] memory lessons_ = new Lesson[](lessonsCount);
        for (uint i = 0; i < lessonsCount; i++) {
            lessons_[i] = lessons[i];
        }
        return lessons_;
    }

    function createLesson(string memory notes, string memory name) public {
        lessons[lessonsCount++] = Lesson(msg.sender, notes, false, name);
    }

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

        for (uint i = 0; i < answerTexts.length; i++) {
            newExercise.answers.push(Answer(answerTexts[i], isCorrect[i]));
        }
    }

    function getExercises(
        uint256 lessonId
    ) public view returns (Exercise[] memory) {
        require(lessonId < lessonsCount, "Lesson does not exist");

        Exercise[] memory lessonExercises = new Exercise[](exercisesCount);
        for (uint i = 0; i < exercisesCount; i++) {
            lessonExercises[i] = exercises[lessonId][i];
        }
        return lessonExercises;
    }
}
