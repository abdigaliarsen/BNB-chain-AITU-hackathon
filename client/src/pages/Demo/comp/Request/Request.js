import React, { useState } from "react";
import { Input, Button } from "../../../../UI";
import { Money, Coins, Wallet, At } from "phosphor-react";
import generateProof from "../../../../utils/web3/generate-proof";

import "./Request.sass";
import { sbtInteract, verifierInteract } from "../../../../utils/web3/contractsInteraction";

const Request = ({ userInfo, setSubmitted }) => {

    const [inp, setInp] = useState({
        claim: "",
        signature: "",
        proof: "",
        tokenId: "",
        loading: false,
    });

    const handleLoanProof = async () => {
        if (!(inp.claim === '' || inp.signature === '')) {
            alert("One of the input value for proof generation hasn't been provided ")
            return;
        }

        setInp({ ...inp, loading: true })

        // Load files and run proof locally
        let DOMAIN = "http://localhost:3000";

        let req1 = await fetch(`${DOMAIN}/loan.wasm`);
        let wasmBuff = Buffer.from(await req1.arrayBuffer());

        let req2 = await fetch(`${DOMAIN}/loan_final.zkey`);
        let zkeyBuff = Buffer.from(await req2.arrayBuffer());


        try {
            let proof = await generateProof(inp.claim, inp.signature, wasmBuff, zkeyBuff);
            setInp({ ...inp, proof: proof, loading: false, claim: "", signature: "" })

        } catch (error) {
            alert("Proof generation Failed: " + error)
            setInp({ ...inp, loading: false })
        }
    }

    const verify = async() => {
        if (inp.proof !== '') {
            alert('No proof calculated yet');
            return;
        }

        setInp({ ...inp, loading: true });

        let a = inp.proof[0];
        let b = inp.proof[1];
        let c = inp.proof[2];
        let pubInp = inp.proof[3];

        try {
            let tx = await verifierInteract().verify(a, b, c, pubInp);
            await tx.wait();
            console.log("Verification received!");
            setInp({ ...inp, loading: false, drop: true });
        } catch (error) {
            alert("Verification failed: " + error);
            setInp({ ...inp, loading: false });
        }
    }

    const getLoan = async(loan) => {
        if (inp.proof !== '') {
            alert('No proof calculated yet');
            return;
        }

        let x = loan.salary;

        setInp({ ...inp, loading: true });

        let a = inp.proof[0];
        let b = inp.proof[1];
        x -= loan.amount;
        let c = inp.proof[2];
        let pubInp = inp.proof[3];

        try {
            let tx;
            sbtInteract().then(async (tk) => {
                console.log(tk.methods);
                tx = await tk.methods.mint(a, b, c, pubInp);
            });
            setInp({ ...inp, loading: false, drop: true });
        } catch (error) {
            alert("Verification failed: " + error);
            setInp({ ...inp, loading: false });
        }

        console.log(x);
        return x > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // данные из формочки
        // + converts to int
        const obj = {
            amount: +e.target.amount.value,
            salary: +e.target.salary.value,
        };

        console.log(obj);

        setSubmitted(getLoan(obj));
    };

    return (
        <div className="request">
            <div className="request__text">Request loan</div>

            <form className="request__form" onSubmit={handleSubmit}>
                <Input type="text" placeholder="Amount" name="amount">
                    <Money size={32} />
                </Input>

                <div style={{ marginBottom: "3.2rem" }}></div>

                <Input type="text" placeholder="Salary" name="salary">
                    <Coins size={32} />
                </Input>

                <div style={{ marginBottom: "3.2rem" }}></div>

                <div className="request__form__el">
                    <Button text="Submit" type="submit" />
                </div>
            </form>

            <div className="metamask__userinfo">
                <div className="metamask__userinfo__el">
                    <At size={32} /> {userInfo.account}
                </div>
                <div className="metamask__userinfo__el">
                    <Wallet size={32} /> {userInfo.ethBalance}
                </div>
            </div>
        </div>
    );
};

export default Request;
