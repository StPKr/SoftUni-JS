start();

async function start() {
    // const r1 = execute1();
    // const r2 = execute2();
    // const r3 = execute3();

    const [r1, r2, r3] = await Promise.all([
        execute1(),
        execute2(),
        execute3()
    ])

    console.log(r1, r2, r3);
}

function execute1() {
    console.log('execute 1');
    return new Promise(res => {
        setTimeout(res, 1500, 'Result 1');
    })
}

function execute2() {
    console.log('execute 2');
    return new Promise(res => {
        setTimeout(res, 1000, 'Result 2');
    })
}

function execute3() {
    console.log('execute 3');
    return new Promise(res => {
        setTimeout(res, 2000, 'Result 3');
    })
}