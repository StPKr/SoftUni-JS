function numbers(input){
    let n = Number(input[0]);
    let prod = 0;
    for ( i = 1; i <= 10; i++){
        console.log(`${i} * ${n} = ${i*n}`)
    }
}
numbers(["5"])