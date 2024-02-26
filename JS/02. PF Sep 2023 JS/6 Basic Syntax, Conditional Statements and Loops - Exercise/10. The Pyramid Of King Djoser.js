function solve(base, increment) {
    let counter1 = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let area1 = 0;
    let area2 = 0;
    for (let i = base; i > 0; i -= 2) {
        counter1++;
        area2 = (i - 2) * (i - 2);
        area1 = i * i - area2;
        if (i === 1 || i === 2) {
            gold = i * i
        } else if (counter1 % 5 === 0) {
            lapis += area1;
            stone += area2;
        } else {
            marble += area1;
            stone += area2;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(counter1 * increment)}`);
}
solve(10, 0.75)
