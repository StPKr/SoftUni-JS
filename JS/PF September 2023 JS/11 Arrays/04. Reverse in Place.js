function solve(arr) {
    let string = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        string += arr[i] + " ";
    }
    console.log(string);
}
solve(['a', 'b', 'c', 'd', 'e'])