// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Modifier {
    modifier isCreator(address creator) {
        require(
            msg.sender == creator,
            "Only the creator can update the lesson"
        );
        _;
    }

    modifier isLessonValid(string memory notes, string memory name) {
        require(bytes(notes).length > 0, "Notes cannot be empty");
        require(bytes(name).length > 0, "Name cannot be empty");
        _;
    }
}
