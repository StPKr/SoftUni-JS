function solve(input) {
    let firstIndex = input.length / 2 - 1;
    let secondindex = input.length - 1;
    let firstHalf = "";
    let secondHalf = "";
    for (let i = firstIndex; i >= 0; i--) {
        firstHalf += input[i];
    }
    for (let j = secondindex; j > firstIndex; j--) {
        secondHalf += input[j];
    }
    console.log(firstHalf);
    console.log(secondHalf);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');