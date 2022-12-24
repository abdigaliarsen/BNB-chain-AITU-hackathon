import React from "react";

import { Button } from "../../UI";

import { Files, PlayCircle } from "phosphor-react";

import "./Header.sass";

const Header = () => {
    return (
        <div className="header">
            <h2 className="header__text-first">Introducing</h2>

            <img src="svgs/mainlogo.svg" alt="main-logo" />

            <h3 className="header__text-second">
                Privacy-first Zero-Knowledge Soulbound Token
            </h3>

            <div className="header__button-container">
                <Button text="Docs">
                    <Files />
                </Button>
                <Button text="Demo">
                    <PlayCircle />
                </Button>
            </div>
        </div>
    );
};

export default Header;
