function sum(input){
    let dep = Number(input[0]);
    let time = Number(input[1]);
    let perc = Number(input[2]);
    let finsum = dep+time*dep*perc/100/12;
    console.log(finsum)
    }
    sum(["200", "3", '5.7'])