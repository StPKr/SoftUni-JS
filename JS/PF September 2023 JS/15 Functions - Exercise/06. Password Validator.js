function solve(password) {
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
    }
    let digitCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (/[0-9]/.test(password[i])) {
            digitCount++;
        }
    }
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }
    if (
        password.length >= 6 &&
        password.length <= 10 &&
        /^[a-zA-Z0-9]+$/.test(password) &&
        digitCount >= 2
    ) {
        console.log("Password is valid");
    }
}
solve('logIn')