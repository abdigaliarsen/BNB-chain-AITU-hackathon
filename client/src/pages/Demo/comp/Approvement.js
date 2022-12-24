import React from "react";
import { Link } from "react-router-dom";

import "./Approvement.sass";
import { Button } from "../../../UI";

const Approvement = () => {
    return (
        <div className="approvement">
            <h1 className="approvement__text">🎉 Loan approved</h1>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__button-container">
                    <Button text="Home" />
                </div>
            </Link>
        </div>
    );
};

export default Approvement;
