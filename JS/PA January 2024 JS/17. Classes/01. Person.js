class Person {
    static counter = 0;

    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        Person.counter++;

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    sayHello() {
        console.log(`${this.firstName} says hi!`);
    }
    static greet() {
        console.log('Hello world!');
        this.farewell(); // can access other static methods but not other ones like sayHello();
    }

    static farewell() {
        console.log('Goodbye!');
    }

    static printCount() {
        console.log(`${this.counter} instances have been created`);
    }

    static clone(person) {
        {
            const result = new Person(person.firstName, person.lastName, person.age, person.email);
            return result;
        }
    }
}
Person.printCount();
const myPerson = new Person('John', 'Smith', 32, 'john@abv.bg');
console.log(myPerson.toString());

Person.greet();
// myPerson.greet(); // static method is part of the class not of each instance
Person.printCount();

const myClone = Person.clone(myPerson);
console.log(myPerson);
console.log(myClone);
console.log(myPerson == myClone);
