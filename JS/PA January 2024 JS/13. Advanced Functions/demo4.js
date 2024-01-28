function outer() {
    let count = 5;
    let name = 'Peter';

    function func(a, b) {
        console.log(name);
        count++;

        return count + a + b;
    }
    return func;
}

const inner = outer();
console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));
console.log(inner(3, 5));