import React from "react";
import { Input, Button } from "../../../../UI";
import { Money, Coins, Wallet, At } from "phosphor-react";

import "./Request.sass";

const Request = ({ userInfo, setSubmitted }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="request">
            <div className="request__text">Request loan</div>

            <form className="request__form" onSubmit={handleSubmit}>
                <Input type="text" placeholder="Amount">
                    <Money size={32} />
                </Input>

                <div style={{ marginBottom: "3.2rem" }}></div>

                <Input type="text" placeholder="Salary">
                    <Coins size={32} />
                </Input>

                <div style={{ marginBottom: "3.2rem" }}></div>

                <div className="request__form__el">
                    <Button text="Submit" type="submit" />
                </div>
            </form>

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

export default Request;
