function solve(arr) {
    arr = arr.map(Number);
    let arr2 = [];
    for (let el of arr) {
        if (el < 0) {
            arr2.unshift(el);

        } else {
            arr2.push(el);
        }
    }
    console.log(arr2.join("\n"));
//     for (let el of arr2) {
//         console.log(el)
//     } 
}
solve(['7', '-2', '8', '9'])