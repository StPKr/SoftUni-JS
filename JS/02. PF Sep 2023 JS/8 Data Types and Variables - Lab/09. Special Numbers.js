function solve(n) {
    let i = 1;
    let sum = 0;
    let a;
    while (i <= n) {
        n += "";
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        sum === 5 || sum === 7 || sum === 11 ? console.log(`${i} -> True`) : console.log(`${i} -> False`)
        i = parseInt(i);
        i++;
        sum = 0;
    }

}
solve(15)