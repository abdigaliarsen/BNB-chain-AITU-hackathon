import React from "react";

import "./Rejection.sass";
import { Button } from "../../../UI";

const Rejection = () => {
    return (
        <div className="rejection">
            <h1 className="rejection__text">😢 Request rejected</h1>
            <div className="header__button-container">
                <Button text="Home" />
            </div>
        </div>
    );
};

export default Rejection;
