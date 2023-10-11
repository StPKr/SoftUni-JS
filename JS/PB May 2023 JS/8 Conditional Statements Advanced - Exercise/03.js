function check(input) {
    let type = input[0];
    let count = Number(input[1]);
    let bud = Number(input[2]);
    let pr = 0;
    let disc = 0;
    let inc = 0;
    let fin = 0
    if (type === "Roses") {
        pr = 5;
        if (count > 80) {
            disc = 0.1;
            fin = pr * count - pr * count * disc;
        } else {
            fin = pr * count;
        }
    } else if (type === "Dahlias") {
        pr = 3.80;
        if (count > 90) {
            disc = 0.15;
            fin = pr * count - pr * count * disc;
        } else {
            fin = pr * count;
        }
    } else if (type === "Tulips") {
        pr = 2.80;
        if (count > 80) {
            disc = 0.15;
            fin = pr * count - pr * count * disc;
        } else {
            fin = pr * count;
        }
    } else if (type === "Narcissus") {
        pr = 3;
        if (count < 120) {
            inc = 0.15;
            fin = pr * count + pr * count * inc;
        } else {
            fin = pr * count;
        }
    } else if (type === "Gladiolus") {
        pr = 2.50;
        if (count < 80) {
            inc = 0.2;
            fin = pr * count + pr * count * inc;
        } else {
            fin = pr * count;
        }
    }
    if (bud >= fin) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(bud - fin).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(fin - bud).toFixed(2)} leva more.`);
    }
}
check(["Roses", "55", "250"])