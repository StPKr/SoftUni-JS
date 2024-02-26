function convertor(input){
    let tax = Number(input[0]);
    let kec = tax-tax*0.4;
    let ekip = kec-kec*0.2;
    let top = ekip*0.25;
    let aks = top*0.2;
    let sum = tax + kec + ekip + top + aks;
    console.log(sum);
}
convertor(["365"])