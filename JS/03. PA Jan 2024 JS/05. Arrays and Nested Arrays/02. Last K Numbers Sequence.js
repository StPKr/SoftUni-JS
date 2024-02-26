function solve(n, k) {
    let outputArray = [1];
    let nextElement = 0;
    while (outputArray.length < n) {
        let lastIndex = outputArray.length - 1;
        for (let i = lastIndex; i > lastIndex - k; i--) {
            if (typeof outputArray[i] === "number") {
                nextElement += outputArray[i];
            }
        }
        outputArray.push(nextElement);
        nextElement = 0;
    }
    return outputArray
}
solve(8, 2);