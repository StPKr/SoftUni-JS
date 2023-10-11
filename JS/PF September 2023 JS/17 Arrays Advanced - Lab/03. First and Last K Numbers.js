function solve(arr) {
    // let forward = arr.slice(1, arr[0] + 1)
    // console.log(forward.join(" "))
    // let backward = arr.slice(-arr[0]);
    // console.log(backward.join(" "))
    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length - k,
        arr.length).join(' '));
}
solve([2,
    7, 8, 9]
)