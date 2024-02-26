function solve(arr){
    return function(){
        return arr;
    }
}
// let myFunc = solve;
// console.log(myFunc);
// console.log(myFunc());
// console.log(); 
myFunc = solve();
console.log(myFunc);
console.log(myFunc(5));

// let a = {name: "bill", gender: "male"};
// let b = Object.assign({}, a);
// let c = Object.create(a); // - only the prototype is inherited
// a.name = "Test"
// console.log(a);

// console.log(b);
// console.log(b.name);

// console.log(c);
// console.log(c.name);
