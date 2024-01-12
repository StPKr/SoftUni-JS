function solve(n) {
    let text = String(n);
    let check = true;
    let firstElement = text[0];
    let sum = 0;
    for (let i = 0; i <text.length; i++){
        if (firstElement !== text[i]){
            check = false;
        } 
        sum+= Number(text[i]);
    }
    console.log(check);
    console.log(sum);
}
solve(2222222);
solve(1234);