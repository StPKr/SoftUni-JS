function equalNeighbourPairs(inputArray) {
    let counter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[0].length; j++) {
            if (inputArray[i][j] === inputArray[i][j + 1]) {
                counter++;
            }
            if (i < inputArray.length - 1) {
                if (inputArray[i][j] === inputArray[i + 1][j]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
};
solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);

// let matrix =
//     [[1, 2, 3],
//     [4, 7, 5]];
// for (let i = 0; i < matrix[0].length; i++) {
//     let fE = matrix[0][i];
//     let sE = matrix[1][i];
//     if (fE === sE) {
//         console.log(fE);
//     } else {
//         console.log("BB")
//     }
// }
