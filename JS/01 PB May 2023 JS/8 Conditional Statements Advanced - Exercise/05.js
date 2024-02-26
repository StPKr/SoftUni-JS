function check(input) {
    let bud = Number(input[0]);
    let sez = input[1];
    let dest = 0;
    let pl = 0;
    if (bud <= 100) {
        dest = "Bulgaria";
        switch (sez) {
            case "summer": bud *= 0.3; pl = "Camp"; break;
            case "winter": bud *= 0.7; pl = "Hotel"; break;
        }
    } else if (100 < bud && bud <= 1000) {
        dest = "Balkans"
        switch (sez) {
            case "summer": bud *= 0.4; pl = "Camp"; break;
            case "winter": bud *= 0.8; pl = "Hotel"; break;
        }
    } else {
        dest = "Europe";
        bud *= 0.9;
        pl = "Hotel";
    }
    console.log(`Somewhere in ${dest}`)
    console.log(`${pl} - ${(bud).toFixed(2)}`)
}
check(["50", "summer"])