function solve(matrix) {
    let mainOutput = 0;
    let secondaryOutput = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainOutput += matrix[i][i];
        secondaryOutput += matrix[i][matrix.length - 1 - i];
    }
    console.log(mainOutput + " " + secondaryOutput);
};
solve([[20, 40],
[10, 60]]
);