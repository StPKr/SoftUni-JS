function check(input) {
    let town = input[0];
    let vol = Number(input[1]);
    let fin = 0;

    switch (town) {
        case "Sofia":
            if (vol >= 0 && vol <= 500) {
                fin = (vol * 0.05).toFixed(2);
            } else if (vol > 500 && vol <= 1000) {
                fin = (vol * 0.07).toFixed(2);
            } else if (vol > 1000 && vol <= 10000) {
                fin = (vol * 0.08).toFixed(2);
            } else if (vol > 10000) {
                fin = (vol * 0.12).toFixed(2);
            } else {
                fin = "error"
            } break;
        case "Varna":
            if (vol >= 0 && vol <= 500) {
                fin = (vol * 0.045).toFixed(2);
            } else if (vol > 500 && vol <= 1000) {
                fin = (vol * 0.075).toFixed(2);
            } else if (vol > 1000 && vol <= 10000) {
                fin = (vol * 0.1).toFixed(2);
            } else if (vol > 10000) {
                fin = (vol * 0.13).toFixed(2);
            } else {
                fin = "error"
            } break;
        case "Plovdiv":
            if (vol >= 0 && vol <= 500) {
                fin = (vol * 0.055).toFixed(2);
            } else if (vol > 500 && vol <= 1000) {
                fin = (vol * 0.08).toFixed(2);
            } else if (vol > 1000 && vol <= 10000) {
                fin = (vol * 0.12).toFixed(2);
            } else if (vol > 10000) {
                fin = (vol * 0.145).toFixed(2);
            } else {
                fin = "error"
            } break;
        default: fin = "error"; break;
    }
    console.log(fin);
}
check(["Varna", "3874.50"])