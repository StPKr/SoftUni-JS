function time(input){
    let F = Number(input[0]);
    let S = Number(input[1]);
    let T = Number(input[2]);
    let tot = F + S + T;
    let min = Math.floor(tot/60);
    let sec = tot%60;
    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    }else {
        console.log(`${min}:${sec}`)
    }
}
time(["35", "45", "44"])