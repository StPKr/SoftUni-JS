function sum(input){
    let chi = Number(input[0]);
    let fi = Number(input[1]);
    let veg = Number(input[2]);
    let finsum1 = chi*10.35+fi*12.40+veg*8.15;
    let finsum = finsum1+finsum1*0.2+2.50;
    console.log(finsum)
    }
    sum(["2", "4", '3'])