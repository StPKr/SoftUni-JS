function solve(y) {
    if (y % 4 === 0) {
        switch (true) {
            case y % 400 === 0: console.log("yes"); break;
            case y % 100 === 0: console.log("no"); break;
            default: console.log("yes"); break;
        }
    } else {
        console.log("no");
    }
}
solve(1984)