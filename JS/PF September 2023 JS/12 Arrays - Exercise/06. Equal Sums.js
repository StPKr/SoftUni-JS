function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let check = false;
    if (arr.length === 1) {
        console.log(0);
        check = true;
    } else if (arr.length === 2) {
        console.log("no");
        check = true;
    } else {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                rightSum += arr[j];
            }
            for (let k = i - 1; k >= 0; k--) {
                leftSum += arr[k];
            }
            if (leftSum === rightSum) {
                console.log(i);
                check = true;
                break;
            }
            leftSum = 0;
            rightSum = 0;
        }


    }
    if (check === false) {
        console.log("no");
    }
}
solve([1, 2, 3, 3]);