function check(input) {
    let num = Number(input[0]);
    if (!(num >= 100 && num <= 200 || num === 0)) {
        console.log("invalid");
    }
}
check(["75"])

/* function check(input) {
    let num = Number(input[0]);
    let isValid = num >= 100 && num <= 200 || num === 0;
    if (!isValid) {
        console.log("invalid");
    }
}
check(["75"]) */