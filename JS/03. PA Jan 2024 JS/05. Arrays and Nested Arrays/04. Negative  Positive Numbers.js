function solve(inputArray) {
    let outputArray = [];
    for (let el of inputArray) {
        if (el < 0) {
            outputArray.unshift(el);
        } else {
            outputArray.push(el);
        }
    }
    console.log(outputArray.join("\n"))
}
solve([7, -2, 8, 9])
