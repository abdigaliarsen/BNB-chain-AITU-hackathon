import "./Input.sass";

const Input = ({ name, type, placeholder, style, children }) => {
    return (
        <div className="input">
            <div className="input__emoji">{children}</div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="input-main"
                style={style}
            />
        </div>
    );
};

export default Input;
