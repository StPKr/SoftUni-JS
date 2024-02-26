class Text {
    constructor(text) {
        this._text = text;
        // this.text = text; // won't work without a setter

    }

    get text() {
        return this._text;
        // return this.text;  // won't work without a setter

    }
}
let myTest = new Text("Pesho");
console.log(myTest._text)