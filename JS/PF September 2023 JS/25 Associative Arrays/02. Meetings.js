function solve(input) {
    let calendar = {};
    for (let item of input) {
        let [day, name] = item.split(' ');
        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
            continue;
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`)
    }
    for (let entry of Object.entries(calendar)) {
        console.log(entry.join(' -> '));
    }

}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);