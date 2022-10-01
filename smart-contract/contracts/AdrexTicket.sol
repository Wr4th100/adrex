// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AdrexTickets is ERC721, Ownable { 
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; 
    
    mapping(uint256=>TicketDetails) public ticketDetails;;   

    struct TicketDetails {
        string nickname;
        string src;
        string dest;
        string trainName;
        string trainNo;
        uint8 platformNo;
        string compartment;
        uint[] seats;
        string date;
        string reachDate;
        uint256 price;
    }

    constructor() ERC721("AdrexTickets", "ATK") {}

    function mint(address to, uint256 tokenId) public onlyOwner returns (uint256){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        _setTokenURI(newItemId, tokenId);
        return newItemId;
    }

    TicketDetails[] public tickets;

    event TicketMinted(address to, uint256 tokenId);
 
}