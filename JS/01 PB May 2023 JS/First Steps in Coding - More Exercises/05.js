function hall(input){
let w = Number(input[0]);
let h = Number(input[1]);
let lengthwise = Math.floor(w*100/120);
let wightwise = Math.floor((h*100 - 100)/70);
let sum = lengthwise * wightwise - 3;
console.log(sum)
}
hall(["15", "8.9"])