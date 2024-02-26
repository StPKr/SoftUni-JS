function solve(n, arr) {
    let newArr = [];
    for (let i = n - 1; i >= 0; i--) {
        newArr += arr[i] + " ";
    }
    console.log(newArr);
}
solve(3, [10, 20, 30, 40, 50])