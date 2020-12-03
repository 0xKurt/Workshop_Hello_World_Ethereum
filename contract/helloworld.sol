pragma solidity ^0.5.0;


contract small_Test_Contract {

    string public someString;

    constructor() public {
      someString = "Hello World";
    }

    function setSomeString(string memory _someString) public payable {
        someString = _someString;
    }
}
