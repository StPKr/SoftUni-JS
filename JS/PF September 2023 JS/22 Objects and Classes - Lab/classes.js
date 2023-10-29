// let person = {
//     name: 'Peter',
//     age: 23
// }

// //...

// let person2 = {
//     name: 'George',
//     age: 21
// }
// instead of  the above
class Person {
    constructor(name, age) {
        // let this = {}; - hidden functionality of writing the below line
        this.name = name;
        this.age = age;
        // return this; = hidden again
    }
    sayHello() {
        console.log('Hello!');
    }
}

let myPerson = new Person('Peter', 23);
let otherPerson = new Person('George', 31);
console.log(myPerson);
console.log(otherPerson);
myPerson.age = 22;
console.log(myPerson);
console.log(otherPerson);
myPerson.sayHello();