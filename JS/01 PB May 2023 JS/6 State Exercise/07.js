function sum(input) {
    let bud = Number(input[0]);
    let N = Number(input[1]);
    let M = Number(input[2]);
    let P = Number(input[3]);
    let NP = N * 250;
    let MP = M * NP * 0.35;
    let PP = P * NP * 0.1;
    let tot = NP + MP + PP;
    if (N > M) {
        tot *= 0.85;
    }
    if (bud >= tot) {
        console.log(`You have ${(bud - tot).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(tot - bud).toFixed(2)} leva more!`)
    }
}
sum(["900", "2", "1", "3"])