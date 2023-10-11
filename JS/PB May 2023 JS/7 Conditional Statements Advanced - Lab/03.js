function clas(input) {
    let ani = input[0];
    switch (ani) {
        case "dog": console.log("mammal"); break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break;
        default: console.log("unknown"); break;
    }

}
clas(["tortoise"])