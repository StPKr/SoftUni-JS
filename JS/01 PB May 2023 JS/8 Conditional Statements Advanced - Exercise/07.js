function check(input) {
    let mon = input[0];
    let ni = Number(input[1]);
    let studio;
    let apart;
    switch (mon) {
        case "May":
        case "October":
            studio = 50;
            apart = 65;
            if (ni > 7 && ni <= 14) {
                studio *= 0.95;
            } else if (ni > 14) {
                studio *= 0.7;
                apart *= 0.9;
            } break;
        case "June":
        case "September":
            studio = 75.20;
            apart = 68.70;
            if (ni > 14) {
                studio *= 0.8;
                apart *= 0.9;
            } break;
        case "July":
        case "August":
            studio = 76;
            apart = 77;
            if (ni > 14) {
                apart *= 0.9;
            } break;
    }
    console.log(`Apartment: ${(apart * ni).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * ni).toFixed(2)} lv.`);
}
check(["October", "15"])