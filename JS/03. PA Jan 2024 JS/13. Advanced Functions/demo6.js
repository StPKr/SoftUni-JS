function createCounter() {
    let count = 0;

    return {
        increment,
        decrement,
        print
    }

    function increment() {
        return ++count;
    }
    function decrement() {
        return --count;
    }

    function print(){
        console.log(count);
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1);
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.print();
counter2.print();
