function check(input){
    let bitcoin = Number(input[0]);
    let juan = Number(input[1]);
    let comission = Number(input[2]);
    let bitcoinPrice = 1168;
    let juanPrice = 0.15;
    let dollar = 1.76;
    let euro = 1.95;
    let budget = 0;
    let finalPrice = 0;
    let finalfinalPrice = 0;
budget = bitcoin*bitcoinPrice + juan*juanPrice*dollar;
finalPrice = budget/euro;
finalfinalPrice = finalPrice - finalPrice*comission/100;
console.log(finalfinalPrice.toFixed(2))
}
check(["1", "5", "5"])