function check(input) {
    let bud = Number(input[0]);
    let sea = input[1];
    let count = Number(input[2]);
    let pr = 0;
    let disc = 0;
    let abon = 0;
    if (sea === "Spring") {
        pr = 3000;
    } else if (sea === "Summer" || sea === "Autumn") {
        pr = 4200;
    } else if (sea === "Winter") {
        pr = 2600;
    }
    if (count <= 6) {
        disc = 0.1;
    } else if (count > 6 && count <= 11) {
        disc = 0.15;
    } else if (count > 11) {
        disc = 0.25;
    }
    if (count % 2 === 0 && sea != "Autumn") {
        abon = 0.05;
    } else {
        abon = 0;
    }
    let fin1 = pr - (pr * disc);
    let fin = fin1 - fin1 * abon;
    if (bud >= fin) {
        console.log(`Yes! You have ${(bud - fin).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(fin - bud).toFixed(2)} leva.`)
    }
}
check(["3600", "Autumn", "6"])

// NETOCHNO ZADANIE ZATOVA I GRESHKA DOLU ( purvo smqtame ednata otstupka posle bonuisa ot neq)
// function test(input) {
//     let biu = Number(input[0]);
//     let sez = input[1];
//     let rib = Number(input[2]);
//     let cen;

//     switch (sez) {
//         case "Spring": cen = 3000;
//             if (0 < rib && rib <= 6 && rib % 2 != 0) {
//                 cen *= 0.9;
//             } else if (0 < rib && rib <= 6 && rib % 2 === 0) {
//                 cen *= 0.85;
//             } else if (6 < rib && rib <= 11 && rib % 2 != 0) {
//                 cen *= 0.85;
//             } else if (6 < rib && rib <= 11 && rib % 2 === 0) {
//                 cen *= 0.8;
//             } else if (11 < rib && rib % 2 != 0) {
//                 cen *= 0.75
//             } else if (11 < rib && rib % 2 != 0) {
//                 cen *= 0.7
//             } break;
//         case "Summer": cen = 4200;
//             if (0 < rib && rib <= 6 && rib % 2 != 0) {
//                 cen *= 0.9;
//             } else if (0 < rib && rib <= 6 && rib % 2 === 0) {
//                 cen *= 0.85;
//             } else if (6 < rib && rib <= 11 && rib % 2 != 0) {
//                 cen *= 0.85;
//             } else if (6 < rib && rib <= 11 && rib % 2 === 0) {
//                 cen *= 0.8;
//             } else if (11 < rib && rib % 2 != 0) {
//                 cen *= 0.75
//             } else if (11 < rib && rib % 2 === 0) {
//                 cen *= 0.7
//             } break;
//         case "Autumn": cen = 4200;
//             if (0 < rib && rib <= 6) {
//                 cen *= 0.9;
//             } else if (6 < rib && rib <= 11) {
//                 cen *= 0.85;
//             } else if (11 < rib) {
//                 cen *= 0.75
//             } break;
//         case "Winter": cen = 2600;
//             if (0 < rib && rib <= 6 && rib % 2 != 0) {
//                 cen *= 0.9;
//             } else if (0 < rib && rib <= 6 && rib % 2 === 0) {
//                 cen *= 0.85;
//             } else if (6 < rib && rib <= 11 && rib % 2 != 0) {
//                 cen *= 0.85;
//             } else if (6 < rib && rib <= 11 && rib % 2 === 0) {
//                 cen *= 0.8;
//             } else if (11 < rib && rib % 2 != 0) {
//                 cen *= 0.75
//             } else if (11 < rib && rib % 2 === 0) {
//                 cen *= 0.7
//             } break;

//     }
//     if (biu >= cen) {
//         console.log(`Yes! You have ${(biu - cen).toFixed(2)} leva left.`)
//     } else {
//         console.log(`Not enough money! You need ${(cen - biu).toFixed(2)} leva.`)
//     }
// }
// test(["2000", "Winter", "13"])