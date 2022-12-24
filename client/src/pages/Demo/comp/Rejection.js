import React from "react";
import { Link } from "react-router-dom";

import "./Rejection.sass";
import { Button } from "../../../UI";

const Rejection = () => {
    return (
        <div className="rejection">
            <h1 className="rejection__text">😢 Request rejected</h1>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__button-container">
                    <Button text="Home" />
                </div>
            </Link>
        </div>
    );
};

export default Rejection;
