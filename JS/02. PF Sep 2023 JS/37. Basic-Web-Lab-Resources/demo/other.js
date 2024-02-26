let api = require('./module');
console.log(api.add(2, 3));
console.log(api.myVar);

api.myVar[1] = 25;
api.print();