function solve(arr) {
    let newArr = [];
    while (arr.length > 1) {
        newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {

            newArr.push(arr[i] + arr[i + 1]);
        }
        arr = newArr;

    }
    console.log(arr[0]); // if it's only console.log(arr); - might print the length of the array infront
}
solve([5, 0, 4, 1, 2])