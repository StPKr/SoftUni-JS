function solve(n) {
    let text = "";
    if (n === undefined) {
        n = 5;
    }
    for (let i = 0; i < n; i++) {
        text = "";
        for (let j = 0; j < n; j++) {
            text += "* ";
        }
        console.log(text);
    }
};
solve();