function proj(input){
    let name = input[0]
    let count = Number(input[1])
    let time = count*3
    console.log(`The architect ${name} will need ${time} hours to complete ${count} project/s.`)
}
proj(["George", 4])