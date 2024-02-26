function solve(array) {
    let sum = 0;
    let inverseSum = 0;
    let concat = "";

    for (let el of array) {
        sum += el;
        inverseSum += 1 / el;
        concat += el.toString();
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
};
solve([1, 2, 3])