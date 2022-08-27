// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Voting {

    mapping (bytes32 => uint8) public votesReceived;

    // parties politiques avec la liste de leurs candidats
    mapping (bytes32 => bytes32[]) public candidateListByParty;

    function addParty(bytes32 partyName, bytes32[] memory candidateList) public{
        candidateListByParty[partyName] = candidateList;
    }
}
