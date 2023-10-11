function solve(arr) {
    let maxSequence = 0;
    let lastIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSequence = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                currentSequence++;
            } else {
                break;
            }
            if (maxSequence < currentSequence) {
                maxSequence = currentSequence;
                lastIndex = j;
            }
        }
    }
    let result = '';
    for (let k = lastIndex; k > lastIndex - maxSequence; k--) {
        result += arr[k] + ' ';
    }
    console.log(result);
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);