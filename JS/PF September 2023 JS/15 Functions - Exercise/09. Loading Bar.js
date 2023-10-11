function solve(a) {
    let b = a / 10;
    let stringOne = "";
    let stringTwo = "";
    if (b === 10) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        for (let i = 1; i <= b; i++) {
            stringOne += "%";
        }
        for (let j = 10 - b; j >= 1; j--) {
            stringTwo += ".";
        }
        console.log(`${a}% [${stringOne}${stringTwo}]`)
        console.log("Still loading...");
    }
}
solve(30)