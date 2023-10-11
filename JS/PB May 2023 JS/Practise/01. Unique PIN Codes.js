function check(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let isPrime = true;
    for (let i = 1; i <= n1; i++) {
        for (let j = 2; j <= n2; j++) {
            for (let prime = 2; prime < j; prime++) {
                if (j % prime === 0) {
                    isPrime = false;
                    break;
                }
            }

            for (let k = 1; k <= n3; k++) {
                if (i % 2 === 0 && isPrime && k % 2 === 0) {
                    console.log(`${i} ${j} ${k}`)
                }
            } isPrime = true;
        }
    }
}
check(["3", "5", "5"])