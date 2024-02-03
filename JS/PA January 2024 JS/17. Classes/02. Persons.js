function solve() {
    class Person {
        static counter = 0;

        firstName;
        lastName;
        age;
        email;

        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }

    }
    let list = [];
    const anna = new Person('Anna', 'Simpson', 22, 'aana@yahoo.com');
    list.push(anna);

    const softUni = new Person('SoftUni');
    list.push(softUni);

    const stephan = new Person('Stephan', 'Johnson', 25);
    list.push(stephan);

    const gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    list.push(gabriel);

    return list;
}