function combo(input) {
    let n = 0;
    let counter = 0;
    for (let a = 0; a <= Number(input); a++) {
        for (let b = 0; b <= Number(input); b++) {
            for (c = 0; c <= Number(input); c++) {
                n = a + b + c;
                while (n === Number(input)) {
                    counter++;
                    break;
                }
            }
        }
    }
    console.log(counter)
}
combo(["25"]);