function sum(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);
    let V1 = P1 * H;
    let V2 = P2 * H;
    let VF = (P1 + P2) * H;
    if (V >= VF) {
        console.log(`The pool is ${(VF / V * 100).toFixed(2)}% full. Pipe 1: ${(V1 / VF * 100).toFixed(2)}%. Pipe 2: ${(V2 / VF * 100).toFixed(2)}%.`);
    } else {
        console.log(`For ${H.toFixed(2)} hours the pool overflows with ${(VF - V).toFixed(2)} liters.`)
    }
}
sum(["1000", "100", "120", "3"])