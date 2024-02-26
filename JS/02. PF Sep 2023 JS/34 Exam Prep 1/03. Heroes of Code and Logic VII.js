function solve(input) {
    let n = Number(input.shift());
    let party = {};


    for (let i = 0; i < n; i++) {
        let heroData = input.shift();
        let [name, hp, mp] = heroData.split(" ");

        let hero = {
            hp: Number(hp),
            mp: Number(mp)
        };

        party[name] = hero;
    }
    while (input[0] !== "End") {
        let line = input.shift();
        let tokens = line.split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let hero = party[name];

        switch (command) {
            case "Heal":
                let hpToRestore = Number(tokens[2]);
                if (hpToRestore + hero.hp > 100) {
                    hpToRestore = 100 - hero.hp;
                }
                hero.hp += hpToRestore
                console.log(`${name} healed for ${hpToRestore} HP!`);
                break;
            case "Recharge":
                let mpToRestore = Number(tokens[2]);
                if (mpToRestore + hero.mp > 200) {
                    mpToRestore = 200 - hero.mp;
                }
                hero.mp += mpToRestore
                console.log(`${name} recharged for ${mpToRestore} MP!`);
                break;
            case "CastSpell":
                let mpCost = Number(tokens[2]);
                let spellName = tokens[3];
                if (hero.mp >= mpCost) {
                    hero.mp -= mpCost;
                    console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`)
                }
                else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`)
                }
                break;
            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                hero.hp -= damage;
                if (hero.hp > 0) {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`)
                }
                else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete party[name];
                }
                break;
        }

    }
    for (let name in party) {
        let hero = party[name];
        console.log(name);
        console.log(`  HP: ${party[name].hp}`);
        console.log(`  MP: ${hero.mp}`);


    }
}
solve(["2"
    , "Solmyr 85 120"
    , "Kyrre 99 50"
    , "Heal - Solmyr - 10"
    , "Recharge - Solmyr - 50"
    , "TakeDamage - Kyrre - 66 - Orc"
    , "CastSpell - Kyrre - 15 - ViewEarth"
    , "End"
])