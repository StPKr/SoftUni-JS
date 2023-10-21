function bunnyKill(inputArray) {
let bombBunnycoordinates = inputArray.pop().split(" ");
inputArray.map(x => Number(x).toArray());
console.log(inputArray)


}
bunnyKill(['5 10 15 20',
           '10 10 10 10',
           '10 15 10 10',
           '10 10 10 10',
           '2,2 0,1']
);