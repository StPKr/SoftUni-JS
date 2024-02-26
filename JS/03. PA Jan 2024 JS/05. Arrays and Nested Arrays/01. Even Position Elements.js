function solve(inputArray) {
    let output = "";
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            output += inputArray[i] + " ";
        }
    }
    console.log(output);
}
solve(['20', '30', '40', '50', '60']);