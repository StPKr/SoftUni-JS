function solve(arr, a) {
    for (let i = 1; i <= a; i++) {
        arr.push(arr[0]);
        arr.shift();
    }
    console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);