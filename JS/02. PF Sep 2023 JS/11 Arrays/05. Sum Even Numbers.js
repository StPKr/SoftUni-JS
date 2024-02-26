function solve(arr) {
    let sumOfEven = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        if (n % 2 === 0) {
            sumOfEven += n;
        }
        else {
            continue;
        }
    }
    console.log(sumOfEven)
}
solve(['1', '2', '3', '4', '5', '6'])