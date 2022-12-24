import React from "react";

import FeaturesCard from "./comp/FeaturesCard";
import { HeaderSecond } from "../../UI";

import "./Features.sass";

const Features = () => {
    return (
        <div className="features">
            <div className="features__container">
                <HeaderSecond text="Verify safely" />

                <div className="features__container">
                    <div className="features__container__el">
                        <FeaturesCard
                            header="Trustless"
                            text="Our token is built on a trustless platform, meaning that it does not rely on any third parties to facilitate transactions. All transactions are securely processed on our decentralized network, ensuring that your assets are always under your control."
                        />

                        <FeaturesCard
                            header="Privacy-first"
                            text="We prioritize the privacy of our users and have implemented various measures to protect your personal information. Our token uses cutting-edge encryption techniques to keep your transactions private and secure."
                        />
                    </div>
                    <div className="features__container__el">
                        <FeaturesCard
                            header="open-source"
                            text="Our token is built on an open-source platform, which means that all of our code is publicly available for review by the community. This transparency allows for greater security and trust in our platform."
                        />
                        <FeaturesCard
                            header="User friendly"
                            text="We have designed our token to be intuitive and easy to use, making it accessible to people of all skill levels. Our platform aims to constantly update with new features and improvements to ensure that it remains user friendly."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
