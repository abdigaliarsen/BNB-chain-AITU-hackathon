import React from "react";
import { Input, Button } from "../../../../UI";
import { Money, Coins } from "phosphor-react";

import "./Request.sass";

const Request = () => {
    return (
        <div className="request">
            <div className="request__text">Request loan</div>

            <form className="request__form">
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
        </div>
    );
};

export default Request;
