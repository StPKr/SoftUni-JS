class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(3, 5);
console.log(myRect);
console.log(myRect.calcArea());