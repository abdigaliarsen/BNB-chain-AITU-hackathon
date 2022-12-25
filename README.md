SBT address: 0x4374633438945121723EB4B6a3805dE99cc59917

Successfully submitted source code for contract
contracts/MindStreamToken.sol:MindStreamToken at 0x4374633438945121723EB4B6a3805dE99cc59917
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MindStreamToken on Etherscan.
https://testnet.bscscan.com/address/0x4374633438945121723EB4B6a3805dE99cc59917#code

Verifier address: 0xa2A209fF3f063b5a5002b959e13Edb69fB027d33

Successfully submitted source code for contract
contracts/lib/Verifier.sol:Verifier at 0xa2A209fF3f063b5a5002b959e13Edb69fB027d33
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Verifier on Etherscan.
https://testnet.bscscan.com/address/0xa2A209fF3f063b5a5002b959e13Edb69fB027d33#code

# MindStream Token
## Extension for Zero Knowledge SoulBound Tokens (ZK SBT)
## How does ZK SBT work
We use zk-SNARK protocol here to combine ZKPs with SBTs. zk-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a zero-knowledge proof construction 
that allows one party (the prover) to prove to another party (the verifier) that a statement is true, without revealing any information about the statement itself.

In a zk-SNARK proof, the prover generates a proof that consists of a small set of data called "witnesses" and a proof string. The proof string is a cryptographic proof 
that the witnesses are valid, and it is generated using a set of predetermined parameters and the witnesses.

The verifier can then use the proof string and the predetermined parameters to verify the validity of the proof, without having to know the actual values of the 
witnesses. This allows the prover to prove that a statement is true without revealing any information about the statement itself.

By using zk-SNARK technology with an SBT we can prove the ownership of a particular soulbound token without revealing any sensitive information about the token itself.

## The Problem
When people try to prove the authenticity, they usually show the possession of something or belonging to a certain community. But there are cases when these sorts of 
information could be sensitive and people would not want to show it publicly. So there is a solution to this problem, it is called Zero Knowledge Proofs (ZKPs). Then, 
comes another problem, in particular it is related to SoulBound Tokens, because this type of tokens contains the most sensitive information, due to its nature being 
something non-transferable.
 When people try to implement Zero Knowledge SoulBound Tokens (ZK SBTs), solutions usually get messy and users usually get confused with that lines of code.
 
## Solution
Make a user friendly interface for ZK SBTs, like there is for any other standard like ERC721, ERC20, etc.

## Process
We found a ZK SBT smart contract at https://github.com/SpartanLabsXyz/zk-sbt. Then we modified it and create an interface for it ISBT.sol.

```
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
```
Then we created a documentation on how to use the standard at https://aday-labs.gitbook.io/mindstream-token/. In the end we made a landing page for the project and a 
small demo Dapp at vercel app url, where we show that our contract really works.

