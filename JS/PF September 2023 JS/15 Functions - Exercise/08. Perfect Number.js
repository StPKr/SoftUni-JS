function solve(a) {
    let compareNumnber = 0;
    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            compareNumnber += i;
        }
    }
    if (a === compareNumnber) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}
solve(6)