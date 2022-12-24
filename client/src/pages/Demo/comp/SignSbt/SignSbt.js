import React from "react";
import "./SignSbt.sass";
import { Button } from "../../../../UI";
import { Wallet, At } from "phosphor-react";

const SignSbt = ({ userInfo, setAllowed }) => {
    const handleSubmit = () => {
        setAllowed(true);
    };

    return (
        <div className="metamask">
            <div className="metamask__text">Sign with your SBT</div>
            <Button text="Allow access" action={handleSubmit}></Button>

            <div className="metamask__userinfo">
                <div className="metamask__userinfo__el">
                    <At size={32} /> {userInfo.account}
                </div>
                <div className="metamask__userinfo__el">
                    <Wallet size={32} /> {userInfo.ethBalance}
                </div>
            </div>
        </div>
    );
};

export default SignSbt;
