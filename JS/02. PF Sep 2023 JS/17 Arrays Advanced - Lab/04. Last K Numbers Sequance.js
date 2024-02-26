function solve(n, k) {
    let arr = [1];
    let nextElement = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= i - k; j--) {
            if (j < 0) {
                break
            }
            nextElement += Number(arr[j]);
        }
        arr.push(nextElement);
        nextElement = 0;
    }
    console.log(arr.join(" "))
}
solve(6, 3);