function check(input){
let totalPrice = 0;
let track = input[2];
let juniors = Number(input[0]);
let seniors = Number(input[1]);
let totalCount = juniors + seniors;
let jTax = 0;
let sTax = 0;
switch (track){
    case "trail": jTax = 5.50; sTax = 7; break;
    case "cross-country": jTax = 8; sTax = 9.50; break;
    case "downhill": jTax = 12.25; sTax = 13.75; break;
    case "road": jTax = 20; sTax = 21.50; break;
    default: break;

}
if (track === "cross-country" && totalCount >= 50){
    jTax *= 0.75;
    sTax *= 0.75;
}
totalPrice = 0.95*(juniors*jTax + seniors*sTax);
console.log(totalPrice.toFixed(2));
}
check(["10", "20", "trail"]);