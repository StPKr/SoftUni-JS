function text(input) {
    let i = 0;
    let name = input[i];
    i++;
    while (name != "Stop") {
        console.log(name);
        name = input[i];
        i++;
    }
}
text(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
