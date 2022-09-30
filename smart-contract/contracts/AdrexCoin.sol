// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AdrexCoin is ERC20, Ownable {
    constructor() ERC20("AdrexCoin", "ADX") {}

    function mint(address to, uint256 amount) public payable {
        require(msg.value == amount*0.0001 ether, "invalid Amount of token");
        _mint(to, amount);
    }
    receive() external payable{}
    fallback() external payable{}
}