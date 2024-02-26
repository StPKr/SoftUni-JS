// let otherModule = require('./module');
// console.log(otherModule.add(5, 3)); 
// this loads all functions, the below only loads the declared ones
let { add, multiply } = require('./module');
console.log(add(5,3))
console.log(multiply(5, 3))

