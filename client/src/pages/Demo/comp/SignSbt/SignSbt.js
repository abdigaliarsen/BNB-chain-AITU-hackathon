import React from "react";
import "./SignSbt.sass";
import { Button } from "../../../../UI";

const SignSbt = () => {
    return (
        <div className="metamask">
            <div className="metamask__text">Sign with your SBT</div>
            <Button text="Allow access"></Button>
        </div>
    );
};

export default SignSbt;
