function solve(arr, a) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum === a) {
                console.log(arr[i] + " " + arr[j])
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],
    8
)