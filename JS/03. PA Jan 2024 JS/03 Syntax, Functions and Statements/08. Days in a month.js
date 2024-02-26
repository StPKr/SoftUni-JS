function solve(m, y) {
    let lastDayOfMonth = new Date(y, m, 0);
    let numberOfDays = lastDayOfMonth.getDate();
    console.log(numberOfDays);
};
solve(1, 2012);