// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";
import "./Types.sol";
import "./Modifier.sol";

contract Property is Types, Modifier,ERC721Base {
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
   mapping(uint256 => Lesson) public lessons;
    mapping(uint256 => mapping(address => Review)) public lessonsReviews;
    mapping(uint256 => mapping(uint256 => Exercise)) public exercises;
    uint256 public exercisesCount = 0;
    uint256 public lessonsCount = 0;

    event createLessonE(string notes, string name);
    event lessonUpdated(string notes, string name);

    function createLesson(string memory notes, string memory name)
        public
        isLessonValid(notes, name)
    {
        lessons[lessonsCount++] = Lesson(msg.sender, notes, false, false, name);
        emit createLessonE(notes, name);
    }

    function updateLesson(
        uint256 lessonId,
        string memory notes,
        string memory name
    ) public isCreator(lessons[lessonId].creator) isLessonValid(notes, name) {
        require(lessonId < lessonsCount, "Lesson does not exist");

        Lesson storage lessonToUpdate = lessons[lessonId];
        lessonToUpdate.notes = notes;
        lessonToUpdate.name = name;

        emit lessonUpdated(notes, name);
    }

    function deleteLesson(uint256 lessonId) public isCreator(lessons[lessonId].creator) {
        require(lessonId < lessonsCount, "Lesson does not exist");
        Lesson storage lessonToDelete = lessons[lessonId];
        lessonToDelete.isDeleted = true;
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
    ) public isCreator(lessons[lessonId].creator) {
        require(lessonId < lessonsCount, "Lesson does not exist");
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
