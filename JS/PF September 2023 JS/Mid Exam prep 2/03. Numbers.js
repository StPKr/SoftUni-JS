function numbers(integerSequence) {
    let integerArray = integerSequence.split(" ").map(Number);
    let sum = 0;
    integerArray.forEach(x => sum += x);
    let average = sum / integerArray.length;
    integerArray.sort((a, b) => b - a);
    let outputArray = [];
    for (let n of integerArray) {
        if (outputArray.length === 5) {
            break;
        }
        if (n > average) {
            outputArray.push(n);
        }
        else {
            break
        }
    }
    if (outputArray.length > 0) {
        console.log(outputArray.join(" "));
    }
    else {
        console.log("No");
    }
}
numbers('10 20 30 40 50')