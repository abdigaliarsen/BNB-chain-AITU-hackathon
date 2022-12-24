// SPDX-License-Identifier: No-License
pragma solidity ^0.8.0;

import "../SBT.sol";

abstract contract SBTBurnable is zkSBT {
    function burn() public virtual {
        super._burn(_msgSender());
    }
    
    function burnFrom(address account) public virtual {
        super._burn(account);
    }
}