import React from "react";
import "./Metamask.sass";
import { Button } from "../../../../UI";

import { onConnect } from "../../../../utils/web3";

const Metamask = ({ setConnected }) => {
    const login = async () => {
        await onConnect().then((data) => {
            setConnected(true);
        });
    };

    return (
        <div className="metamask">
            <div className="metamask__text">Enter your wallet</div>
            <Button
                text="Connect Metamask"
                action={async () => await login()}
            ></Button>
        </div>
    );
};

export default Metamask;
