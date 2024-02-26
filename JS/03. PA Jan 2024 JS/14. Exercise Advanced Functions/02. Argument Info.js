function solve(...params) {
	let result = {};
	for (const el of params) {
		let type = typeof el;
		console.log(`${type}: ${el}`);

		if (!result.hasOwnProperty(type)) {
			result[type] = 0;
		}

		result[type] += 1;
	}

	let sortResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

	for (let [k, v] of sortResult) {
		console.log(`${k} = ${v}`);
	}
}
solve('cat', 42, function () { console.log('Hello world!'); })
solve({ name: 'bob' }, 3.333, 9.999);