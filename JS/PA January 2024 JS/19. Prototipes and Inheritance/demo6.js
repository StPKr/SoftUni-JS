class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`${this.name} says hi!`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    sayHello(){
        super.sayHello(); // calls the original function due to super
        console.log(`${this.name} is in ${this.grade} grade`) //overrides only for Student instances
    }
}

const person = new Student('Peter', 11, 'fifth');

console.log(person);
person.sayHello();

console.log(person instanceof Student);
console.log(person instanceof Person);