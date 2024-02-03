class Circle {
    radius;
    // radius = 5; - we can set a value here and not ask for a param in the constructor

    constructor(r) {
        this.radius = r;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    get diameter() {
        return 2 * this.radius;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.radius);
console.log(myCircle.area);
console.log(myCircle.diameter);

myCircle.radius = 3
console.log(myCircle.area);
console.log(myCircle.diameter);

myCircle.diameter = 4;

console.log(myCircle.radius);