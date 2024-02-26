function solve(areaFn, volFn, input) {
    const data = JSON.parse(input);
    // const result = [];

    // for (let fig of data) {
    //     result.push({
    //         area: areaFn.call(fig),
    //         volume: volFn.call(fig)
    //     })
    // } - noob way

    const result = data.map(fig => ({
        area: areaFn.call(fig),
        volume: volFn.call(fig)
    }));

    return result
}

const data1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`

const data2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`

solve(area, vol, data1);
solve(area, vol, data2);

function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};


