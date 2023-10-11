function conc(input) {
    let fn = input[0];
    let ln = input[1];
    let age = Number(input[2]);
    let loc = input[3];
    console.log(`You are ${fn} ${ln}, a ${age}-years old person from ${loc}.`)
    
}
conc(['Stef', 'Kro', '30', 'PZ'])