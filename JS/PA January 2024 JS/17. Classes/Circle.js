class Circle {
    radius;
    // radius = 5; - we can set a value here and not ask for a param in the constructor

    constructor(r) {
        this.radius = r;
    }
}

const myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.radius);