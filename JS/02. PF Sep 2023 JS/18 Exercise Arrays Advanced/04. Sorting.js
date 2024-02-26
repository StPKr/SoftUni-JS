function solve(arr) {
    let newArr = [];
    arr.sort((a, b) => (b - a));
    while (arr.length != 0) {        
        newArr.push(arr.shift());
        newArr.push(arr.pop());
    }
    console.log(newArr.join(" "))
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])