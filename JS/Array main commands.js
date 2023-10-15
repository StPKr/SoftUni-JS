function includes(inputArr, element) {
    for (let item of inputArr) {
        if (item === element) {
            return true;
        }
    }

    return false;
}

function indexOf(inputArr, element) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === element) {
            return i;
        }
    }

    return -1;
}

function slice(inputArr, start, end) {
    let result = [];

    if (start < 0) {
        start += inputArr.length;
    }
    if (end < 0) {
        end += inputArr.length;
    }

    for (let i = start; i < end; i++) {
        result[result.length] = inputArr[i];
    }

    return result;
}

function join(inputArr, str) {
    let result = '';

    for (let i = 0; i < inputArr.length - 1; i++) {
        result += String(inputArr[i]);
        result += str;
    }

    if (inputArr.length > 0) {
        result += inputArr[inputArr.length - 1];
    }

    return result;
}

function map(inputArr, operation) {
    let result = [];

    for (let item of inputArr) {
        let newItem = operation(item);
        result.push(newItem);
    }

    return result;
}

function filter(inputArr, predicate) {
    let result = [];

    for (let item of inputArr) {
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}

// BUBBLE SORT

function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (compare(arr[i], arr[i + 1])) {
                swap(arr, i, i + 1);
            }
        }
    }
}

function swap(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function compare(a, b) {
    return a > b;
}