// SPDX-License-Identifier: No-License
pragma solidity ^0.8.0;

import "./lib/SBT.sol";

contract MindStreamToken is zkSBT {
    constructor() zkSBT("MindStreamToken", "MST") {}
}