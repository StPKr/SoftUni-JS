function check(input){
    let days = Number(input[0]);
let totalFood = Number(input[1]);
let totalDogFood = 0;
let totalCatFood = 0;
index = 2;
let dogFood = Number(input[index]);
let catFood = Number(input[index]);
let totalEatenFood = 0;
let biscuits = 0;
let counter = 0 ;
while (index < days*2 + 2){
    counter++
    dogFood = Number(input[index]);
    index++
    catFood = Number(input[index]);
    index++;
    totalDogFood += dogFood;
    totalCatFood += catFood;
    if (counter % 3 === 0){
        biscuits += 0.1*(dogFood + catFood);
    }
    
    
}
totalEatenFood = totalCatFood + totalDogFood;
console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
console.log(`${(totalEatenFood/totalFood*100).toFixed(2)}% of the food has been eaten.`);
console.log(`${(totalDogFood/totalEatenFood*100).toFixed(2)}% eaten from the dog.`);
console.log(`${(totalCatFood/totalEatenFood*100).toFixed(2)}% eaten from the cat.`);


}
check(["3", "1000", "300", "20", "100", "30", "110", "40"]);