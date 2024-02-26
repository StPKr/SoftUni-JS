const write = function (a) {
    return `Hello, ${a}!`;
}
console.log(write('world'));

// let a = 3;

// function add(b) {
//     return a + b;
// }

// console.log(add(5));
// console.log(add(5));
// a = 4;
// console.log(add(5));
// console.log(add(5)); - impure function

function add(a, b) {
    return a + b;
}

function test() {
    const varA = 3;
    const varB = 4;
    const expectedResult = 8;

    console.log(add(varA, varB) == expectedResult);
}
test();