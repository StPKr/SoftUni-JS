function cena(input){
    let sqm = Number(input[0])
    let fp = sqm*7.61
    let disc = fp*0.18
    let finpr = fp - disc
    console.log(`The final price is: ${finpr} lv.
The discount is: ${disc} lv.`)
}
cena(["550"])