function solve(...input) {
    let n = Number(input.shift());
    while (input.length > 0) {
        let command = input.shift();
        switch (command) {
            case "chop": n /= 2; console.log(n); break;
            case "dice": n = Math.sqrt(n); console.log(n); break;
            case "spice": n += 1; console.log(n); break;
            case "bake": n *= 3; console.log(n); break;
            case "fillet": n *= 0.8; console.log(n); break;
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
