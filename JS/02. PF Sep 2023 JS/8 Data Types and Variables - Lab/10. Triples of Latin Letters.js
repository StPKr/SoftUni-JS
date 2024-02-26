function solve(n) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    let letter1 = String.fromCharCode(97 + i); // 'a' has ASCII code 97
                    let letter2 = String.fromCharCode(97 + j);
                    let letter3 = String.fromCharCode(97 + k);
                    console.log(`${letter1}${letter2}${letter3}`);
                }
            }
        }
    }
solve(3)