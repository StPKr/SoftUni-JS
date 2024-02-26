function solve(a) {
    let evenSum = 0;
    let oddSum = 0;
    let string = a.toString();
    for (let i = 0; i < string.length; i++) {
        let n = Number(string[i]);
        if (n % 2 === 0) {
            evenSum += n;
        } else {
            oddSum += n;
        }
    }    
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
solve(1000435)
