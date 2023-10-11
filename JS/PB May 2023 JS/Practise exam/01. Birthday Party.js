function check (input){
let zala = input[0];
// let cake  = 0.2*zala;
// let drinks = 0.55*cake;
// let animator = zala /3;
let budget = 0;
budget = (zala) + (0.2*zala) + (0.2*0.55*zala) + (zala/3);
console.log(budget);
}
check([3720])