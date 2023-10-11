function funds(input) {
    let budget = Number(input[0]);
    let stat = Number(input[1]);
    let cloth = Number(input[2]);
    let decor = budget * 0.1;
    let clothes = cloth * stat;

    if (stat > 150) {
        clothes *= 0.9;
    }
    let tot = decor + clothes;
    if (budget >= tot) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - tot).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(tot - budget).toFixed(2)} leva more.`);
    }
}
funds(["9587.88", "222", "55.68"])