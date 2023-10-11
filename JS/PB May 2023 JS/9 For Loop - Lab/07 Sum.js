function sum(input) {
    let numAsText = input[0].toString(); // ... = input[0] + ""
    let sum = 0;
    for (i = 0; i < numAsText.length; i++) {
        let num = Number(numAsText[i]);
        sum += num
    }
    console.log(`The sum of the digits is:${sum}`);
}
sum([1234])

// concatenating number and text turns it into text
// function test(input) {
//     let a = Number(input[0]);
//     a += "";
//     console.log(a[0]);
// }
// test(["1234"])