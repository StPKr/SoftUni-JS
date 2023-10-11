function solve(n){
    
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let moneyIHave = 0;
    let bitcoinAmount = 0;
    for (let i = 0; i < n.length; i++){
        let gold = n[i];
        moneyIHave += gold*goldPrice;
        if (moneyIHave > bitcoinPrice){
            bitcoinAmount = Math.floor(moneyIHave / bitcoinPrice);
            moneyIHave += moneyIHave - bitcoinAmount*bitcoinPrice;

        }
        
}
console.log(bitcoinAmount) 
console.log(moneyIHave)
}
solve([100, 200, 300])