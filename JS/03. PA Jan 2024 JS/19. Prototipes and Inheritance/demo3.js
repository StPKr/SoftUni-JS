function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log(`${this.name} says hi`);
};

const obj = new Person('Peter', 27);
console.log(obj);

obj.sayHello();

console.log(obj.__proto__);
console.log(obj.__proto__ == Person.prototype);
