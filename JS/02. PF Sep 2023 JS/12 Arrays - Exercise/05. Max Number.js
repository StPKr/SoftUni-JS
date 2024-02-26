function solve(arr) {
    let newArr = [];
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                check = false;
                break;
            }
            check = true;
        }
        if (check) {
            newArr.push(arr[i]);
        }
        check = true;
    }
    console.log(newArr.join(" "))
}
solve([41,
    41,
    34,
    20])