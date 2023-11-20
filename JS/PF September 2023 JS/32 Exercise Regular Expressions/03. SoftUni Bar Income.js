function solve(arr) {
    let income = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>\w+)>[^|$%.0-9]*\|[^|$%.0-9]*(?<count>\d+)\|(?<price>\d+\.?\d*)\$/;

    let command = arr.shift();

    while (command !== "end of shift") {
        let match = command.match(pattern);

        if (match) {
            let { customer, product, count, price } = match.groups;
            let totalPrice = Number(count) * Number(price);

            income += totalPrice;

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);

        }

        command = arr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);