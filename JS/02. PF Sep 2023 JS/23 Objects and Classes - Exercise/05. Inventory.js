function solve(inputArr) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
        summon() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);
        }
    }
    let heroes = [];
    for (let el of inputArr) {
        let elementArr = el.split(" / ");
        let name = elementArr.shift();
        let level = Number(elementArr.shift());
        let hero = new Hero(name, level);
        for (let item of elementArr) {
            hero.items = item;
        }
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(x => x.summon());
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)