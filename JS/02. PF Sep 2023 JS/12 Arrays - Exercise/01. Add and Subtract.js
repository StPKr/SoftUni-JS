function solve(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        sum += n;
        if (n % 2 === 0) {
            n += i;
        }
        else {
            n -= i;
        }
        newArr.push(n);
    }
    let sum2 = 0;
    for (let j of newArr) {
        sum2 += j;
    }
    console.log(newArr);
    console.log(sum);
    console.log(sum2);
}
solve([5, 15, 23, 56, 35]);