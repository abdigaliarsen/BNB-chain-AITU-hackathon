import { Button } from "../../UI";
import { Files } from "phosphor-react";

import "./Navbar.sass";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <img src="svgs/logo.svg" alt="logo" />
                <Button text="Docs">
                    <Files />
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
