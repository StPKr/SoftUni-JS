function solve(input) {
    let username = input[0];
    let password = "";
    let count = 1;
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    let j = 1;
    let match = "";
    while (j <= input.length) {
        match = input[j];
        if (count < 4) {
            if (match === password) {
                console.log(`User ${username} logged in.`);
                break;
            }
            else {
                console.log("Incorrect password. Try again.")
            }
        } else {
            if (match === password) {
                console.log(`User ${username} logged in.`);
                break;
            }
            else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }
        j++;
        count++;
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])

