function solve(sequence, specialNumber) {
    let a = Number(specialNumber[0]);
    let pow = Number(specialNumber[1]);
    while (sequence.includes(a)) {
        let detect = sequence.indexOf(a);
        let numsToRemove = pow * 2 + 1;
        let startIndexToRemove = detect - pow;

        if (startIndexToRemove < 0) {
            numsToRemove += startIndexToRemove;
            startIndexToRemove = 0;
        }
        sequence.splice(startIndexToRemove, numsToRemove);
    }
    // let sum = 0;
    // for (let j = 0; j < sequence.length; j++) {
    //     sum += Number(sequence[j]);
    // } - instead of the below;
    console.log(sequence.reduce((a, b) => a + b, 0));
}
solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);