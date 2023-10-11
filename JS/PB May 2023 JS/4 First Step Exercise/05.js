function sum(input){
    let pen = Number(input[0]);
    let mark = Number(input[1]);
    let litre = Number(input[2]);
    let discount = Number(input[3]);
    let finsum1 = pen*5.80+mark*7.20+litre*1.20;
    let finsum = finsum1-finsum1*0.25;
    console.log(finsum)
    }
    sum(["2", "3", "4", "25"])