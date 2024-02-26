function sum(input) {
    let holy = Number(input[0]);
    let puz = Number(input[1]);
    let pup = Number(input[2]);
    let ted = Number(input[3]);
    let min = Number(input[4]);
    let tr = Number(input[5]);
    let suma = puz * 2.60 + pup * 3 + ted * 4.10 + min * 8.20 + tr * 2;
    let sbor = puz + pup + ted + min + tr;
    if (sbor >= 50) {
        suma *= 0.75;
    }
    let finsuma = suma * 0.9;
    if (finsuma >= holy) {
        console.log(`Yes! ${(finsuma - holy).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holy - finsuma).toFixed(2)} lv needed.`);
    }
}
sum(["320", "8", "2", "5", "5", "1"])