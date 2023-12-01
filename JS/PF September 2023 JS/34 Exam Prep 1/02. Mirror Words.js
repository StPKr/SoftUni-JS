function solve(input) {
    let result = [];
    let count = 0;
    let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi;
    let match = pattern.exec(input);

    while (match) {
        count++;
        let first = match[2];
        let second = match[3];
        if (first == second.split('').reverse('').join('')) {
            result.push(`${first} <=> ${second}`);
        }


        match = pattern.exec(input);
    }
    if (count === 0) {
        console.log("No word pairs found!");

    } else {
        console.log(`${count} word pairs found!`);
    }
    if (result.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(result.join(", "));
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)