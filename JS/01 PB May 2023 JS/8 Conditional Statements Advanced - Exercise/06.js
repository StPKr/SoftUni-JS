function check(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let op = input[2];
    switch (op) {
        case "+":
            let sum = N1 + N2;
            if (sum % 2 === 0) {
                console.log(`${N1} + ${N2} = ${sum} - even`);
            } else {
                console.log(`${N1} + ${N2} = ${sum} - odd`)
            } break;
        case "-":
            let diff = N1 - N2;
            if (diff % 2 === 0) {
                console.log(`${N1} - ${N2} = ${diff} - even`);
            } else {
                console.log(`${N1} - ${N2} = ${diff} - odd`)
            } break;
        case "*": let prod = N1 * N2;
            if (prod % 2 === 0) {
                console.log(`${N1} * ${N2} = ${prod} - even`);
            } else {
                console.log(`${N1} * ${N2} = ${prod} - odd`)
            } break;
        case "/":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`)
            } else {
                console.log(`${N1} / ${N2} = ${(N1 / N2).toFixed(2)}`)
            } break;
        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`)
            } else {
                console.log(`${N1} % ${N2} = ${N1 % N2}`)
            } break;
    }

}
check(["10", "12", "+"])