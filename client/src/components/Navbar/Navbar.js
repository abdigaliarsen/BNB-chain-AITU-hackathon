import { Button } from "../../UI";
import { Files } from "phosphor-react";

import "./Navbar.sass";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <img src="svgs/logo.svg" alt="logo" />
                <a
                    href="https://aday-labs.gitbook.io/mindstream-token/"
                    style={{ textDecoration: "none" }}
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
