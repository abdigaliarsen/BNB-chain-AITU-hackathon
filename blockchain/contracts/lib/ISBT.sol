// SPDX-License-Identifier: No-License
pragma solidity ^0.8.0;

interface ISBT {
    struct Proof {
        uint256[2] a;
        uint256[2][2] b;
        uint256[2] c;
        uint[2] input;
    }

    event Mint(address _soul);
    event Burn(address _soul);
    event Update(address _soul);

    function mint(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint[2] memory input
    ) external;

    function burn(address _soul) external;

    function updateSBT(address _soul, Proof memory _soulData)
        external
        returns (bool);
    
    function getSBTData(address _soul)
        external
        view
        returns (
            uint256[2] memory,
            uint256[2][2] memory,
            uint256[2] memory,
            uint[2] memory
        );
}