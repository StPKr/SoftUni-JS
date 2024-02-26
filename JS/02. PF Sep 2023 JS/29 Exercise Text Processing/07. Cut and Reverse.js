function solve(input) {
    // let firstIndex = input.length / 2 - 1;
    // let secondindex = input.length - 1;
    // let firstHalf = "";
    // let secondHalf = "";
    // for (let i = firstIndex; i >= 0; i--) {
    //     firstHalf += input[i];
    // }
    // for (let j = secondindex; j > firstIndex; j--) {
    //     secondHalf += input[j];
    // }
    // console.log(firstHalf);
    // console.log(secondHalf);
    let text = "";
    for (let i = input.length - 1; i >= 0; i--) {
        text += input[i];
    }
    console.log(text.slice(input.length / 2));
    console.log(text.slice(0, input.length / 2));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');