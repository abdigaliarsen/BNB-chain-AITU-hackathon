import React from "react";
import "./Button.sass";

const Button = ({ text, action, type, ...props }) => {
    return (
        <button onClick={action} className="btn" {...props}>
            {text}
        </button>
    );
};

export default Button;
