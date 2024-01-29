function solve(...params) {
	let result = {};
	for (const el of params) {
		let type = typeof el;
		console.log(`${type}: ${el}`);

		if (!result.hasOwnProperty(type)) {
			result[type] = 0;
		}

		result[type] = result[type] + 1;
	}

	let buff = "";
	for (let [key, value] of Object.entries(result)) {
		buff += `${key} = ${value}\n`;
	}
	console.log(buff);
}
solve('cat', 42, function () { console.log('Hello world!'); })
solve({ name: 'bob'}, 3.333, 9.999);