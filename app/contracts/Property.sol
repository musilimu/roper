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
