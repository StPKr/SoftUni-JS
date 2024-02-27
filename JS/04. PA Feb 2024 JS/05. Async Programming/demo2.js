start();

async function start() {

    console.log("Hello");

    const p = new Promise(executor);

    try {
        const result = await p;
        console.log(`Result:`, result);
    } catch (error) {
        console.log('Encountered Error: ', error);
    }

    console.log('there');

    function executor(resolve, reject) {
        console.log('executing');
        setTimeout(resolve, 2000, "Bye!");
    }
}
