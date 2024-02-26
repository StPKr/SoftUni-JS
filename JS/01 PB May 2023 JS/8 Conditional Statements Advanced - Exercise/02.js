function check(input) {
    let deg = Number(input[0]);
    let time = input[1];
    let outfit;
    let shoes;
    if (deg >= 10 && deg <= 18) {
        switch (time) {
            case "Morning": outfit = "Sweatshirt";
                shoes = "Sneakers"; break;
            case "Afternoon": outfit = "Shirt";
                shoes = "Moccasins"; break;
            case "Evening": outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    } else if (deg > 18 && deg <= 24) {
        switch (time) {
            case "Morning": outfit = "Shirt";
                shoes = "Moccasins"; break;
            case "Afternoon": outfit = "T-Shirt";
                shoes = "Sandals"; break;
            case "Evening": outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    } else {
        switch (time) {
            case "Morning": outfit = "T-Shirt";
                shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit";
                shoes = "Barefoot"; break;
            case "Evening": outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    }
    console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`)
}
check(["16", "Morning"])