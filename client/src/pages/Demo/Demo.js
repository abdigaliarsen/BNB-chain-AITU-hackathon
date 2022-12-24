import { useState, useEffect } from "react";

import Approvement from "./comp/Approvement";
import Rejection from "./comp/Rejection";
import Metamask from "./comp/Metamask/Metamask";
import SignSbt from "./comp/SignSbt/SignSbt";
import Request from "./comp/Request/Request";

import { Navbar } from "../../components";

const Demo = () => {
    const [connected, setConnected] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const userInfo = JSON.parse(window.localStorage.getItem("userAccount"));

        if (userInfo) {
            setUserInfo(userInfo);
            setConnected(true);
        }
    }, []);

    if (!connected) {
        return (
            <>
                <Navbar />
                <Metamask setConnected={setConnected} />;
            </>
        );
    }

    if (!submitted) {
        return (
            <>
                <Navbar />
                <Request userInfo={userInfo} setSubmitted={setSubmitted} />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <SignSbt userInfo={userInfo} />
        </>
    );
};

export default Demo;
