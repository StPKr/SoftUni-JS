function solve(arr) {
    // arr = arr.map(Number); - makes each element of the array into a Number;
    console.log(Number(arr[0]) + Number(arr[arr.length - 1]));
                                    // + Number (arr.pop()); - alternative
}
solve(['20', '30', '40'])