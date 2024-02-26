function solve(x1,y1,x2,y2){
    let a = 0;
    let b = 0;
    let c = 0;
if (x1 >= x2){
    a = x1 - x2;
} else {
    a = x2 - x1;
}
if (y1 >= y2){
    b = y1 - y2;
    } else {
        b = y2 - y1;
    }
    c= Math.sqrt(a*a + b*b);
    console.log(c)
}
solve(2,4,5,0)