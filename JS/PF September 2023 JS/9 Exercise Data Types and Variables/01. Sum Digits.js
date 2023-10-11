function solve(n){
let sum = 0;
for (let i = 0; i < (n.toString()).length; i++){
    let b = Number(n.toString()[i]);
    sum += b;
}
console.log(sum);
}
solve(245678)