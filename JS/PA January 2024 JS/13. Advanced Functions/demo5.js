function createCounter() {
    let count = 0;

    return increment;
    function increment() {
        return ++count;
    }
}

const counter1 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter(); // creates new closure independent form the first one

console.log(counter2());
console.log(counter2());
console.log(counter2());

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1()); 