function solve(n) {
    n = n.toString();
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    let result = sum.toString().includes(`9`);
    console.log(result ?
        `${n} Amazing? True` :
        `${n} Amazing? False`);
}
solve(9)

/* Моят дърварски начин 
function solve(n) {
    n += "";
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < n.length; i++) {
        let m = Number(n[i]);
        sum += m;
    }
sum += "";
for (let j = 0; j < sum.length; j++){
    let a = Number(sum[j]);
    if (a === 9){
        counter ++;
    }
}
    counter > 0 ? console.log(`${n} Amazing? True`) : console.log(`${n} Amazing? False`)
}
solve(583472) */