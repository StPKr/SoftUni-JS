function solve(n){
    let count = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++){
        console.log(count);
        sum +=count;
        count+=2;
        
    }
    console.log(`Sum: ${sum}`)
}
solve(5)