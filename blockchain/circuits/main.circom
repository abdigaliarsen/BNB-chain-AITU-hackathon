pragma circom 2.0.3;

include "../../node_modules/circomlib/circuits/comparators.circom";

template Main() {
    signal input threshold;
    signal input credit_score;
    signal output out;

    component gte = GreaterEqThan(9); // Max num bits would be 9. 2^9 = 512 as the max range of credit score
    gte.in[0] <== credit_score;
    gte.in[1] <== threshold;
    gte.out === 1;

    out <== gte.out;
}

component main { public [ threshold  ] } = Main();

/* INPUT = {
    "threshold": "5",
    "credit_score": "77"
} */