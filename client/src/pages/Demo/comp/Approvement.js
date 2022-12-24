import React from "react";

import "./Approvement.sass";
import { Button } from "../../../UI";

const Approvement = () => {
    return (
        <div className="approvement">
            <h1 className="approvement__text">🎉 Loan approved</h1>
            <div className="header__button-container">
                <Button text="Home" />
            </div>
        </div>
    );
};

export default Approvement;
