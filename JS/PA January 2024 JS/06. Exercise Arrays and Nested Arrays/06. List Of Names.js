// function solve(inputArray) {
//     inputArray.sort((a, b) => a.localeCompare(b));
//     for (let i = 1; i <= inputArray.length; i++) {
//         console.log(i + "." + inputArray[i - 1]);
//     }
// }
function solve(inputArray) {
    inputArray
        .sort((a, b) => a.localeCompare(b))
        .forEach((element, index) => console.log(`${index + 1}.${element}`));
}
solve(["John", "Bob", "Christina", "Ema"]);