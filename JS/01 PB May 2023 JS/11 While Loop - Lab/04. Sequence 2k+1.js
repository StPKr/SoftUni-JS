function numbers(input) {
    let index = 0;
    let n = Number(input[index]);
    let start = 1;
    while (start <= n) {
        console.log(start);
        start = start * 2 + 1;
    }
}
numbers(["31"])