function solve(inputArr) {
    class Employee {
        constructor(a, b) {
            this.name = a;
            this.personalNumber = b;
        }
        info() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }
    let employees = [];
    for (let el of inputArr) {
        let name = el;
        let perNum = el.length;
        let employee = new Employee(name, perNum);
        employees.push(employee);
    }
    employees.forEach((x) => console.log(`Name: ${x.name} -- Personal Number: ${x.personalNumber}`));
    // for (let el of employees) {
    //     el.info();
    // }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)