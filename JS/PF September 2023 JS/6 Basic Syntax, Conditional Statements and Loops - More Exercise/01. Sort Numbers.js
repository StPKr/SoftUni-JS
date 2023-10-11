function solve (x,y,z){
let bn = 0;
let mn = 0;
let sn = 0;

if (x >= y){
       if (x <= z){
        bn = z;
        mn = x
        sn = y;
    } else {
        bn = x;
        if (y >= z){
            mn = y;
            sn = z;
        } else {
            mn = z;
            sn = y;
        }
    }
} else {
    if (y <= z){
        bn = z;
        mn = y;
        sn = x;
    } else {
        bn = y;
        if (z >= x){
            mn = z;
            sn = x;
        } else {
            mn = x;
            sn = z;
        }
    }
}
console.log(bn);
console.log(mn);
console.log(sn);
}
solve (2,1,3)