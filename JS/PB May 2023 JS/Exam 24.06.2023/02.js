function check(input) {
    let maidenParty = Number(input[0]);
    let loveLetter = Number(input[1]);
    let waxRose = Number(input[2]);
    let keyring = Number(input[3]);
    let caricature = Number(input[4]);
    let surpriseLuck = Number(input[5]);
    let totalNumberOfArticules = 0;
    let tempPrice = 0;
    let loveLetterPrice = 0.60;
    let waxRosePrice = 7.20;
    let keyRingPrice = 3.60;
    let caricaturePrice = 18.20;
    let surpriseLuckPrice = 22.00;

    tempPrice = loveLetter * loveLetterPrice
        + waxRose * waxRosePrice
        + keyring * keyRingPrice
        + caricature * caricaturePrice
        + surpriseLuck * surpriseLuckPrice
       totalNumberOfArticules = loveLetter + waxRose + keyring + caricature + surpriseLuck
        if (totalNumberOfArticules >= 25){
            tempPrice *= 0.65;
        }
tempPrice *= 0.9;
if (tempPrice >= maidenParty){
    console.log(`Yes! ${(tempPrice - maidenParty).toFixed(2)} lv left.`)
} else {
    console.log(`Not enough money! ${(maidenParty - tempPrice).toFixed(2)} lv needed.`)
}


}
check(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])
