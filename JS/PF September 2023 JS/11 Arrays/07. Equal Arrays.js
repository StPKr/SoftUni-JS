function solve(arr1, arr2) {
    let sum = 0;
    let check = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            check = false;
            break
        }
        sum += Number(arr1[i]);

    }
    if (check) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30']);