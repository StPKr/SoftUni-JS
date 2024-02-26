function sum(input) {
    let name = input[0];
    let epi = Number(input[1]);
    let rest = Number(input[2]);
    let lunch = rest / 8;
    let rr = rest / 4;
    let tot = (rest - lunch - rr);
    if (tot >= epi) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(tot - epi)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(epi - tot)} more minutes.`);
    }
}
sum(["Game of Thrones", "48", "60"])