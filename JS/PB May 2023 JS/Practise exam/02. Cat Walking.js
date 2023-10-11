function check(input){
let minutes = Number(input[0]);
let walks = Number(input[1]);
let calories = Number (input[2]);
let burnedCalories = minutes*5;
let totalburnedCalories = burnedCalories*walks;
if (totalburnedCalories >= calories/2){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalburnedCalories}.`)
} else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalburnedCalories}.`)
}
}
check(["30", "3", "600"])