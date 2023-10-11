function pass(input){
    let phrase = input[0];
    if (phrase == "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else{
        console.log("Wrong password!");
    }
}
pass(["qwerty"])