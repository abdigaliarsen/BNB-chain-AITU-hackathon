import React from "react";

import { Button } from "../../UI";
import { PlayCircle } from "phosphor-react";

import "./CTA.sass";

const CTA = () => {
    return (
        <div className="cta">
            <h2 className="cta__header-second">less words, more action</h2>
            <p className="cta__text">Check the capabilities in the demo</p>
            <Button text="Demo">
                <PlayCircle />
            </Button>
        </div>
    );
};

export default CTA;
