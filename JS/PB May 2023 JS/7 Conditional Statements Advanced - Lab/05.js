/* function menu(input) {
    let prod = input[0];
    let town = input[1];
    let quan = Number(input[2]);
    let price = 0;
    if (town === "Sofia") {
        switch (prod) {
            case "coffee": price = 0.50;
                console.log(`${price * quan}`); break;
            case "water": price = 0.80;
                console.log(`${price * quan}`); break;
            case "beer": price = 1.20;
                console.log(`${price * quan}`); break;
            case "sweets": price = 1.45;
                console.log(`${price * quan}`); break;
            case "peanuts": price = 1.60;
                console.log(`${price * quan}`); break;
        }
    } else if (town === "Plovdiv") {
        switch (prod) {
            case "coffee": price = 0.40;
                console.log(`${price * quan}`); break;
            case "water": price = 0.70;
                console.log(`${price * quan}`); break;
            case "beer": price = 1.15;
                console.log(`${price * quan}`); break;
            case "sweets": price = 1.30;
                console.log(`${price * quan}`); break;
            case "peanuts": price = 1.50;
                console.log(`${price * quan}`); break;
        }
    } else {
        switch (prod) {
            case "coffee": price = 0.45;
                console.log(`${price * quan}`); break;
            case "water": price = 0.70;
                console.log(`${price * quan}`); break;
            case "beer": price = 1.10;
                console.log(`${price * quan}`); break;
            case "sweets": price = 1.35;
                console.log(`${price * quan}`); break;
            case "peanuts": price = 1.55;
                console.log(`${price * quan}`); break;
        }
    }
}
menu(["coffee", "Sofia", "2"]) - moi variant*/

function menu(input) {
    let prod = input[0];
    let town = input[1];
    let quan = Number(input[2]);
    let price = 0;
    if (town === "Sofia") {
        switch (prod) {
            case "coffee": price = quan * 0.50; break;
            case "water": price = quan * 0.80; break;
            case "beer": price = quan * 1.20; break;
            case "sweets": price = quan * 1.45; break;
            case "peanuts": price = quan * 1.60; break;
        }
    } else if (town === "Plovdiv") {
        switch (prod) {
            case "coffee": price = quan * 0.40; break;
            case "water": price = quan * 0.70; break;
            case "beer": price = quan * 1.15; break;
            case "sweets": price = quan * 1.30; break;
            case "peanuts": price = quan * 1.50; break;
        }
    } else {
        switch (prod) {
            case "coffee": price = quan * 0.45; break;
            case "water": price = quan * 0.70; break;
            case "beer": price = quan * 1.10; break;
            case "sweets": price = quan * 1.35; break;
            case "peanuts": price = quan * 1.55; break;
        }
    }
    console.log(price);
}
menu(["sweets", "Sofia", "2.23"])