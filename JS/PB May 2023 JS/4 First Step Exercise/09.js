function sum(input){
    let len = Number(input[0]);
    let wid = Number(input[1]);
    let hei = Number(input[2]);
    let perc = Number(input[3]);
    let finsum = len*wid*hei*0.001*(1-perc*0.01);
    console.log(finsum)
    }
    sum(["85", "75", "47", "17"])