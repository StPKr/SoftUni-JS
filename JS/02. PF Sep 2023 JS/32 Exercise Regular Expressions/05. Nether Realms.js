function solve(input) {
    let names = input.split(",").map(x => x.trim()).sort((a, b) => a.localeCompare(b));
    for (let name of names) {
        let health = 0;
        let damage = 0;
        let healthPattern = /[^0-9\.\+\-\*\/]/g;
        let damagePattern = /[+-]*\d+\.?\d*/g
        let modifierPattern = /[\*\/]/g;
        let healthArray = name.match(healthPattern);
        let damageArray = name.match(damagePattern);
        let modifierArray = name.match(modifierPattern);

        for (let char of healthArray) {
            health += char.charCodeAt();
        }
        if (damageArray) {
            for (let value of damageArray) {
                damage += Number(value);
            }
        }
        if (modifierArray) {
            for (let mod of modifierArray) {
                if (mod === "*") {
                    damage *= 2;
                } else if (mod === "/") {
                    damage /= 2;
                }
            }
        }
        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`)
    }
}
solve("M3ph1st0**,   Azazel");
solve("M3ph-0.5s-0.5t0.0**")
solve("Gos/ho-5")