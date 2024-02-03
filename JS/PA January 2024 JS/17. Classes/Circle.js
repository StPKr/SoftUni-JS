class Circle {
    _radius; // we use _ so we can indicate this will be used for get/set, we can't use the same property name here as well as make a get/set with it
    // radius = 5; - we can set a value here and not ask for a param in the constructor

    constructor(r) {
        this.radius = r;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw TypeError('Diameter must be a number!');
        }
        this._radius = value;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    get diameter() {
        return 2 * this.radius;
    }
    set diameter(value) {
        if (typeof value != 'number') {
            throw TypeError('Diameter must be a number!');
        }
        this.radius = value / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.radius);

//putting get or set we can no longer call the accessoaries as functions  and we can no
// longer give parameters to theses functions, we can just calculate the results;

console.log(myCircle.area);
console.log(myCircle.diameter);

myCircle.radius = 3
console.log(myCircle.area);
console.log(myCircle.diameter);

myCircle.diameter = 4;

console.log(myCircle.radius);
myCircle.diameter = 'hello';
