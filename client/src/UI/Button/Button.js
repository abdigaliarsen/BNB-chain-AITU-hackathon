import React from "react";
import "./Button.sass";

const Button = ({ text, action, type, children }) => {
    return (
        <button onClick={action} className="btn">
            {children}
            {text}
        </button>
    );
};

export default Button;
