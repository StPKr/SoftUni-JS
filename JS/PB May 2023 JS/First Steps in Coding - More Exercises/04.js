function sum(input){
    let pN = Number(input[0]);
    let pM = Number(input[1]);
    let kgN = Number(input[2]);
    let kgM = Number(input[3]);
    let pr = (pN * kgN + pM * kgM) / 1.94;
    console.log((pr).toFixed(2));
}
sum(["0.194", "19.4", "10", "10"])