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
}
equalNeighbourPairs([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2'],]
);