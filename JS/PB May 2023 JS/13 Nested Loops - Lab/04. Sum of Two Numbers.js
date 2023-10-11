function sume(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            counter++;
            if (a + b === magicNumber) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
sume(["23",
    "24",
    "20"])
    ;