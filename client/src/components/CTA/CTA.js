import React from "react";

import { Link } from "react-router-dom";
import { Button } from "../../UI";
import { PlayCircle } from "phosphor-react";

import "./CTA.sass";

const CTA = () => {
    return (
        <div className="cta">
            <h2 className="cta__header-second">less words, more action</h2>
            <p className="cta__text">Check the capabilities in the demo</p>
            <Link to="/demo" style={{ textDecoration: "none" }}>
                <Button text="Demo">
                    <PlayCircle />
                </Button>
            </Link>
        </div>
    );
};

export default CTA;
