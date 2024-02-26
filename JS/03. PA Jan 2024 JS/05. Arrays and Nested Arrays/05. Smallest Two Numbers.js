function solve(inputArray) {
    inputArray.sort((a, b) => a - b);
    let outputArray = [];
    for (let i = 0; i < 2; i++) {
        let element = inputArray.shift();
        outputArray.push(element);
    }
    console.log(outputArray.join(" "));
};
solve([30, 15, 50, 5]);