function solve(n){
switch (true){
    case n % 10 === 0: console.log("The number is divisible by 10"); break;
    case n % 7 === 0: console.log("The number is divisible by 7"); break;
    case n % 6 === 0: console.log("The number is divisible by 6"); break;
    case n % 3 === 0: console.log("The number is divisible by 3"); break;
    case n % 2 === 0: console.log("The number is divisible by 2"); break;
    default: console.log("Not divisible"); break
}
}
solve(30)