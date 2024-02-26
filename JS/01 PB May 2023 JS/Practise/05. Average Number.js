function check(input) {
    let n = Number(input[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++){
       let a = Number(input[i]);
        sum+=a;
    }
    console.log((sum/n).toFixed(2));
}
check(["4",
    "3",
    "2",
    "4",
    "2"
])
