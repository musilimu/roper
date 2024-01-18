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

    struct PropertyE {
        address propertyOwner;
        string pinCode;
        string image;
        uint256 propertyAddress;
    }

    struct PropertyAddress {
        string state;
        string city;
        string district;
    }

    mapping(uint256 => PropertyE) public properties;
    mapping(uint256 => PropertyAddress) public propertyAddressess;

    modifier onlyRegistrar() {
        require(msg.sender == owner(), "you are not registrar");
        _;
    }

    function getAllProperties() public view returns (PropertyE[] memory) {
        PropertyE[] memory allProperties = new PropertyE[](propertiesSize);

        for (uint256 i = 0; i < propertiesSize; i++) {
            allProperties[i] = properties[i];
        }

        return allProperties;
    }

    event addPropertyAddressEvent(string state, string city, string district);

    function addPropertyAddress(
        string memory state,
        string memory city,
        string memory district
    ) public onlyRegistrar {
        propertyAddressess[propertyAddressessSize++] = PropertyAddress(
            state,
            city,
            district
        );
        emit addPropertyAddressEvent(state, city, district);
    }

    event createPropertyEvent(
        address propertyOwner,
        string pinCode,
        string image,
        uint256 propertyAddress
    );

    function createProperty(
        address propertyOwner,
        string memory pinCode,
        string memory image,
        uint256 propertyAddress
    ) public onlyRegistrar {
        properties[propertiesSize++] = PropertyE(
            propertyOwner,
            pinCode,
            image,
            propertyAddress
        );
        emit createPropertyEvent(
            propertyOwner,
            pinCode,
            image,
            propertyAddress
        );
    }
}

/*
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Edu {
    // Structure representing a user
    struct User {
        string email;
        string profilePic;
        mapping(uint256 => Review) reviews;
        // couponcode
        // certifications
    }
    // Structure representing a Lesson
    struct Lesson {
        address creator;
        address[] students;
        string name;
        string[] notes;
        mapping(uint256 => Review) reviews;
        mapping(uint256 => Exercise) exercises;
        // ispublished
    }
    // Structure representing a Exercise for leason
    struct Exercise {
        string question;
        mapping(uint256 => Answer) answers;
    }
    
    uint i = 0;Register an asset
    // Structure representing aanswer of question
    struct Answer {
        string text;
        bool isCorrect;
    }
    // Structure representing a review of reason
    struct Review {
        string message;
        uint256 stars;
    }

    mapping(uint256 => Lesson) lessons;
    mapping(address => User) public users;
    uint256 public lessonsCount = 0;
    uint256 public userReviewCount = 0;
    uint256 public lessonReviewCount = 0;
    uint256 public exercisesCount = 0;
    uint256 public answersCount = 0;




    // Mapping to store token balances for users
    mapping(address => uint256) public tokenBalances;
    event UserRegistered(address indexed user, string email, string profilePic);

    // Array to store all registered user addresses
    address[] public allUsers;


    // Function to register a new user
    function signUp(string memory email, string memory profilePic) public {
        require(bytes(email).length > 0, "Email cannot be empty");
           // Check if the user already exists
        for (uint j = 0; j < allUsers.length; j++) {
            require(allUsers[i] != msg.sender, "User already exists");
        }
      // Initialize User struct members separately
        User storage newUser = users[msg.sender];
        newUser.email = email;
        newUser.profilePic = profilePic;

        // Emit success message
        emit UserRegistered(msg.sender, email,profilePic);

        // Initialize token balance for new users
        tokenBalances[msg.sender] = 0;

       // Add the new user to the array of allUsers
        allUsers.push(msg.sender);
    }


  // Function to get all registered users along with their email and profile pic
function getAllUsers() public view returns (address[] memory addresses, string[] memory emails, string[] memory profilePics) {
    addresses = new address[](allUsers.length);
    emails = new string[](allUsers.length);
    profilePics = new string[](allUsers.length);

    for (uint256 k = 0; k < allUsers.length; k++) {
        addresses[i] = allUsers[i];
        // Retrieve email from the users mapping
        emails[i] = users[allUsers[i]].email; 
        // Retrieve profile pic from the users mapping
        profilePics[i] = users[allUsers[i]].profilePic; 
    }

    return (addresses, emails, profilePics);
}



    function getLessons() public {
    // Lesson[] memory lessons_ = Lesson[](lessonsCount);
    }

    function updateUserprofile(string memory email, string memory profilePic)
        public
    {
        users[msg.sender].email = email;
        users[msg.sender].profilePic = profilePic;
    }

    function createLesson(string[] memory notes) public {
        lessons[lessonsCount++].notes = notes;
    }

    function addExerciseToLesson(
        string memory question,
        uint256 lessonid,
        string memory text,
        bool isCorrect
    ) public {
        Answer memory answer = Answer(text, isCorrect);
        lessons[lessonid].exercises[exercisesCount++].question = question;
        lessons[lessonid].exercises[exercisesCount++].answers[
            answersCount++
        ] = answer;
    }

    function addAnswersToLessonExercise(
        uint256 lessonid,
        uint256 exerciseid,
        string memory text,
        bool isCorrect
    ) public {
        Answer memory answer = Answer(text, isCorrect);
        lessons[lessonid].exercises[exerciseid].answers[
            answersCount++
        ] = answer;
    }

    function reviewLesson(
        string memory message,
        uint256 stars,
        uint256 lessonId
    ) public {
        require(stars <= 5, "stars should be less than 5");
        lessons[lessonId].reviews[lessonReviewCount++] = Review(message, stars);
    }

    function reviewUser(
        string memory message,
        uint256 stars,
        address userAddress
    ) public {
        require(stars <= 5, "stars should be less than 5");
        require(userAddress != msg.sender, "You can't give your self a review");
        users[userAddress].reviews[userReviewCount++] = Review(message, stars);
    }
}
*/
