(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, value) => acc + value);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr.last());
console.log(myArr.skip(3));
console.log(myArr.take(3));
console.log(myArr.sum());
console.log(myArr.average());
