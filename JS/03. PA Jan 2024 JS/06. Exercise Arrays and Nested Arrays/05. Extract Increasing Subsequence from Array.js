// function solve(inputArray) {
//     let outputArray = [];
//     let highestNumber = -Infinity;
//     for (let i = 0; i< inputArray.length; i++ ){
//         if (inputArray[i] >= highestNumber){
//             highestNumber = inputArray[i];
//             outputArray.push(highestNumber);
//         }
//     }
//     return outputArray;
// }

function solve(array) {
	let biggest = Number.MIN_SAFE_INTEGER;
	let res = array.reduce((acc, currentElement) => {
		if (biggest <= currentElement) {
			acc. push(currentElement);
			biggest = currentElement;
		}
		return acc;
	}, []);
	return res;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
