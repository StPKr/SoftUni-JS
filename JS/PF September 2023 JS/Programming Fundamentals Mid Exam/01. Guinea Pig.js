function solve(input) {
    let [food, hay, cover, weight] = input.map(Number);
    let remainingFood = food *= 1000;
    let remainingHay = hay *= 1000;
    let remainingCover = cover *= 1000;
    weight *= 1000;
    for (let i = 1; i <= 30; i++) {
        remainingFood -= 300;
        if (i % 2 === 0) {
            let usedHay = 0.05 * remainingFood;
            remainingHay -= usedHay;
        }
        if (i % 3 === 0) {
            remainingCover -= weight / 3;
        }
        if (remainingFood <= 0 || remainingCover <= 0 || remainingHay <= 0) {
            console.log("Merry must go to the pet store!")
            break;
        }
    }
    if (remainingFood > 0 && remainingCover > 0 && remainingHay > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(remainingFood / 1000).toFixed(2)}, Hay: ${(remainingHay / 1000).toFixed(2)}, Cover: ${(remainingCover / 1000).toFixed(2)}.`)
    }
}
solve([10,
    5,
    5.2,
    1]
)