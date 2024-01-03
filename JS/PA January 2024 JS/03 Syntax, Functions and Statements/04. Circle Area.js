function solve(n) {
    if ((typeof n) == "number") {
        console.log((n * n * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof n}.`)
    }
};
solve("asrfa")