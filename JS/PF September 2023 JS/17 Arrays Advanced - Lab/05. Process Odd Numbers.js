function solve(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    newArr = newArr.map(x => x * 2);
    console.log(newArr.join(" "));
}
solve([10, 15, 20, 25]);