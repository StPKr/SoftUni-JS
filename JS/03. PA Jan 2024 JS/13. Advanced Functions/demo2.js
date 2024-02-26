console.log(Math.max.apply(null, [3,4,5,6])); // function is not made to work with arrays but
// we fix this with apply and adding null as first param