// function bye(){
//     console.log("Bye!");
// }
// const person = {
//     name: "Peter",
//     age: 24,
//     'last name': 'Johnson',
//     sayHi() {
//         console.log(`Hello! ${this.name}`);
//     },
//     sayBye: bye
// };

// person.sayHi();

// console.log(person['last name']);
// const myFn = person.sayHi;
// myFn(); 

// person.sayBye();

// const person2 = {
//     name: 'Jon',
//     age: 31,
//     sayBye: bye
// }

function createRect(width, height) {
    const rect = { width, height };
    rect.getArea = () => {
        return rect.width * rect.height;
    };
    return rect;
}
createRect(4, 7);