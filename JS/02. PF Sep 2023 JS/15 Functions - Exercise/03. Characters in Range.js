function solve(a, b) {
    let value = "";
    if (a.charCodeAt(0) < b.charCodeAt(0)) {
        for (let i = a.charCodeAt(0) + 1; i < b.charCodeAt(0); i++) {
            value += String.fromCharCode(i) + " ";
        }
    } else if (b.charCodeAt(0) < a.charCodeAt(0)) {
        for (let i = b.charCodeAt(0) + 1; i < a.charCodeAt(0); i++) {
            value += String.fromCharCode(i) + " ";
        }
    } else {
        value = a;
    }
    return value;
}
solve("a", "c")