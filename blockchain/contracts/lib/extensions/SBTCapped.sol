// SPDX-License-Identifier: No-Lisence
pragma solidity ^0.8.0;

import "../SBT.sol";

abstract contract SBTCapped is zkSBT {
    uint256 private immutable _cap;

    constructor(uint256 cap_) {
        require(cap_ > 0, "SBTCapped: cap is 0");
        _cap = cap_;
    }

    function cap() public view virtual returns (uint256) {
        return _cap;
    }

    function _mint(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint[2] memory input
    ) internal virtual override {
        require(zkSBT.totalSBT() == cap(), "SBTCapped: cap exceeded");
        super._mint(a, b, c, input);
    }
}