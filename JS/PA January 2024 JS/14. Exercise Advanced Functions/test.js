function solve(arr){
    return function(){
        return "hello";
    }
}
let myFunc = solve;
console.log(myFunc);
console.log(myFunc());
console.log();
myFunc = solve();
console.log(myFunc);
console.log(myFunc());