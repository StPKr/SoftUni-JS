let helloMsg = "Hello, there!";
let a = 134;
let b = 5;
let isAuthenticate = false;
const arr = [1, 2, 3, 4, 5];
console.log(arr.filter((n) => n > 3));
let x = 123;
x = "asd";
x = 213;
const peshoUser = {
    name: "Pesho",
    age: 23,
};
const users = [
    {
        name: "Pesho1",
        age: 23,
    },
    {
        name: "Pesho2",
        age: 23,
    },
    {
        name: "Pesho3",
        age: 23,
    },
];
users.forEach((user) => {
    console.log(user.name);
});
class Person {
    constructor(firstName, lastName) {
        this.age = 10;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getAgeMsg() {
        return `This human is ${this.age} y/o!`;
    }
    getDetails() {
        console.log(`Person details: ${this.firstName} ${this.lastName}`);
    }
}
const ivanPerson = new Person("Ivan", "Ivanov");
ivanPerson.getDetails();
class Student extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.grades = [6, 5, 6, 5, 4];
    }
}
const mariikaStudent = new Student("Maria", "Kirilova");
mariikaStudent.getDetails();
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 100] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 101] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 102] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
console.log("------------------------");
function checkPaymentStatus(paymentStatusCode) {
    if (paymentStatusCode === PaymentStatus.Failed) {
        console.log("Ne e minalo plashtaneto");
    }
    else if (paymentStatusCode === PaymentStatus.Successful) {
        console.log("Uspeshno plashtane!");
    }
}
checkPaymentStatus(100);
function getIdentity(id) {
    console.log("The type of the id is: " + typeof id);
}
getIdentity(123);
getIdentity("akjsdhkasjhdkjsa");
getIdentity(["a", "b", "c"]);
