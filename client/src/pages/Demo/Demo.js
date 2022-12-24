import { useState } from "react";

import Approvement from "./comp/Approvement";
import Rejection from "./comp/Rejection";
import Metamask from "./comp/Metamask/Metamask";
import SignSbt from "./comp/SignSbt/SignSbt";
import Request from "./comp/Request/Request";

import { Navbar } from "../../components";

const Demo = () => {
    return (
        <div>
            <Navbar />

            <Metamask />
            <SignSbt />
            <Request />

            <Approvement />
            <Rejection />
        </div>
    );
};

export default Demo;
