import React from "react";
import "./Button.sass";

const Button = ({ text, action, type, children }) => {
    return (
        <button onClick={action} className="btn" type={type}>
            <div className="btn__emoji">{children}</div>
            {text}
        </button>
    );
};

export default Button;
