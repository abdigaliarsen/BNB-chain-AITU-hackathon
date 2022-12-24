import React from "react";

import "./Footer.sass";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__text">Created by Aday Labs</div>
                <div className="footer__text">Dec 2022 | Have Fun!</div>
            </div>
            <div className="footer__link">
                <div className="footer__link__text">Source code &rarr;</div>
                <a href="https://github.com/quadropunk/BNB-chain-AITU-hackathon">
                    <img src="svgs/github.svg" alt="github" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
