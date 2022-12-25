// SPDX-License-Identifier: No-License
pragma solidity ^0.8.0;

interface ISBT {
    struct Proof {
        uint256[2] a;
        uint256[2][2] b;
        uint256[2] c;
        uint256[2] input;
    }

    event Mint(address _soul);
    event Burn(address _soul);
    event Update(address _soul);

    function mint(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
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
            uint256[2] memory
        );

    function validateAttribute(address _soul, address verifierAddress)
        external
        view
        returns (bool);

    function totalSBT() external view returns (uint256);

    function hasSoul(address _soul)
        external
        view
        returns (bool);
    
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);
}
