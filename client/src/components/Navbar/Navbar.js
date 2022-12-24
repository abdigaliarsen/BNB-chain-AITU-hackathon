import { Button } from "../../UI";
import { Files } from "phosphor-react";
import { Link } from "react-router-dom";

import "./Navbar.sass";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" style={{ zIndex: "1000" }}>
                    <img src="svgs/logo.svg" alt="logo" />
                </Link>
                <a
                    href="https://aday-labs.gitbook.io/mindstream-token/"
                    style={{ textDecoration: "none", zIndex: "1000" }}
                >
                    <Button text="Docs">
                        <Files />
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
