function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log(`${this.name} says hi!`);
}


function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

// Student.prototype = Object.create(Person.prototype);
Object.setPrototypeOf(Student.prototype, Person.prototype);

const person = new Student('Peter', 11, 'fifth');

console.log(person);
person.sayHello();

console.log(person instanceof Student);
console.log(person instanceof Person);
