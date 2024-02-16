class WineSelection {
    space;
    wines = [];
    bill = 0;
    constructor(space) {
        this.space = space; // Number() maybe
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space == 0) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });

        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const data = this.wines.find(w => w.wineName == wineName)

        if (!data) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (data.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        data.paid = true;
        this.bill += price; // Number() maybe

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const data = this.wines.find(w => w.wineName == wineName)

        if (!data) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if (!data.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.filter(w => w !== data); // possible issue

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            const result = [
                `You have space for ${this.space} bottles more.`,
                `You paid ${this.bill}$ for the wine.`
            ];
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (let wine of this.wines) {
                result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`)
            }
            return result.join('\n');
        }

        const data = this.wines.find(w => w.wineType == wineType);

        if (!data) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        this.wines.filter(w => w.wineType == wineType)
        const result = [];

        this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
        for (let wine of this.wines) {
            result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`)
        }
        return result.join('\n');
    }
}

// try {
//     console.log('\u2022 Test 1')
//     test1()
// } catch (err) {
//     console.error(err.message);
// };
// try {
//     console.log('\u2022 Test 2')
//     test2()
// } catch (err) {
//     console.error(err.message);
// };
// try {
//     console.log('\u2022 Test 3')
//     test3()
// } catch (err) {
//     console.error(err.message);
// };
// try {
//     console.log('\u2022 Test 4')
//     test4()
// } catch (err) {
//     console.error(err.message);
// };
try {
    console.log('\u2022 Test 5')
    test5()
} catch (err) {
    console.error(err.message);
};
function test1() {
    const selection = new WineSelection(2);
    console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
    console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
    console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
}

function test2() {
    const selection = new WineSelection(2);
    selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
    console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
    console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
}

function test3() {
    const selection = new WineSelection(2);
    selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
    selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
    selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
    console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
    console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
}

function test4() {
    const selection = new WineSelection(2);
    console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
    console.log(selection.cellarRevision('Rose'));
}

function test5() {
    const selection = new WineSelection(5);
    selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
    selection.payWineBottle('Bodegas Godelia Mencía', 144);
    selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
    selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
    console.log(selection.cellarRevision());
}

