function cena(input){
    let hrkuch = Number(input[0])
    let hrkot = Number(input[1])
    let cenku = hrkuch*2.50
    let cenkot = hrkot*4
    let fincen = cenku + cenkot
    console.log(`${fincen} lv.`)
}
cena(['5', '4'])