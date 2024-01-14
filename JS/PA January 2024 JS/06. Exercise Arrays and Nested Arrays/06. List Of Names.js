function solve(inputArray) {
    inputArray.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= inputArray.length; i++) {
        console.log(i + "." + inputArray[i - 1]);
    }
}
solve(["John", "Bob", "Christina", "Ema"]);