console.log("Hello");

const p = new Promise(executor);
p.then(onSuccess).catch(onError);

console.log('there');

function executor(resolve, reject) {
    console.log('executing');
    setTimeout(reject, 2000, "Bye!");
}

function onSuccess(data) {
    console.log(data);
}

function onError(error) {
    console.log('Encountered Error: ', error);
}