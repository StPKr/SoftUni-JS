function sum(input){
    let nai = Number(input[0]);
    let boq = Number(input[1]);
    let razr = Number(input[2]);
    let h = Number(input[3]);
    let finsum1 = (nai+ 2)*1.50+(boq+0.1*boq)*14.50+razr*5+0.4;
    let finsum = finsum1*0.3*h+finsum1;
    console.log(finsum)
    }
    sum(["10", "11", "4", "8"])