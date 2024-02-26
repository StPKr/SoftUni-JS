function solve(y,m,d){
let currentDate = new Date(y, m - 1, d + 1);
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

console.log(`${year}-${month}-${day}`); 

}
solve(2016, 9, 30)