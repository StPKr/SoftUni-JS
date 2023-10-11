function change(input) {
    let amount = Number(input[0]);
    let counter = 0;
    while (amount > 0) {
        if (amount >= 2) {
            counter += Math.floor(amount / 2);
            amount = (amount % 2).toFixed(2);
        } else if (amount >= 1) {
            counter += Math.floor(amount / 1);
            amount = (amount % 1).toFixed(2);
        } else if (amount >= 0.5) {
            counter += Math.floor(amount / 0.5);
            amount = (amount % 0.5).toFixed(2);
        } else if (amount >= 0.2) {
            counter += Math.floor(amount / 0.2);
            amount = (amount % 0.2).toFixed(2);
        } else if (amount >= 0.1) {
            counter += Math.floor(amount / 0.1);
            amount = (amount % 0.1).toFixed(2);
        } else if (amount >= 0.05) {
            counter += Math.floor(amount / 0.05);
            amount = (amount % 0.05).toFixed(2);
        } else if (amount >= 0.02) {
            counter += Math.floor(amount / 0.02);
            amount = (amount % 0.02).toFixed(2);
        } else if (amount >= 0.01) {
            counter += Math.floor(amount / 0.01);
            amount = (amount % 0.01).toFixed(2);
        } else {
            break;
        }
    }
    console.log(counter);
}
change(["1.63"])