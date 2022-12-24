import React from "react";
import "./Metamask.sass";
import { Button } from "../../../../UI";

const Metamask = () => {
    return (
        <div className="metamask">
            <div className="metamask__text">Enter your wallet</div>
            <Button text="Connect Metamask"></Button>
        </div>
    );
};

export default Metamask;
