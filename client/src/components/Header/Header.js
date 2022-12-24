import React from "react";

import { Button } from "../../UI";

import "./Header.sass";

const Header = () => {
    return (
        <div className="header">
            <h2 className="header__second">Introducing</h2>

            <img src="svgs/mainlogo.svg" alt="main-logo" />

            <h3 className="header__third">
                Privacy-first Zero-Knowledge Soulbound Token
            </h3>

            <div className="header__button-container">
                <Button text="Docs" />
                <Button text="Demo" />
            </div>
        </div>
    );
};

export default Header;
