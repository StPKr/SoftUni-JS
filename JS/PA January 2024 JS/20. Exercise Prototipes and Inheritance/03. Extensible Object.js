function extensibleObject() {
    let parent = {};
    let childObj = Object.create(parent);

    childObj.extend = function (obj) {
        let objAsArray = Object.entries(obj);
        for (let [key, value] of objAsArray) {
            if (typeof (value) === "function") {
                parent[key] = value;
            } else {
                childObj[key] = value;
            }
        }
    }
    return childObj;
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);



