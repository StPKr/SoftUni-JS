function sayHello(subject, grade) {
    console.log(this.name + ' says hi!');
    console.log(this.name + ' receieve a ' + grade + ' at ' + subject);
}

sayHello('math', 5);

const myObj = {
    name: 'Peter',
    age: 21,
    sayHello
};
// myObj.sayHello();

const secondObj = {
    age: 27,
    name: 'John'
};

myObj.sayHello.call(secondObj, 'biology', 6); // - we change the scope by adding a new object in the ();
myObj.sayHello.apply(secondObj, ['biology', 6]);

const boundFn = sayHello.bind(secondObj, 'art'); // can be called later and doesn't change the original function


boundFn(4);
boundFn.call(myObj, 'math', 4); // can't change the context


// const boundFn = function (grade) {
//     sayHello.call(secondObj, 'art', grade);
// };
// boundFn(4); -  same as above