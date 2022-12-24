import React from "react";

const FeaturesCard = ({ header, text }) => {
    return (
        <div className="features-card">
            <div className="features-card__header">{header}</div>
            <div className="features-card__text">{text}</div>
        </div>
    );
};

export default FeaturesCard;
