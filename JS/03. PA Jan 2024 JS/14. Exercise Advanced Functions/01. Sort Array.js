function sorter(inputArray, arg) {

    arg === "asc" ? ascSorter(inputArray) : descSorter(inputArray);

    function ascSorter(array) {
        array.sort((a, b) => a - b);
    }

    function descSorter(array) {
        array.sort((a, b) => b - a);
    }
    return inputArray;
}
sorter([14, 7, 17, 6, 8], 'asc');

// function sortArray(arr, type) {
// 	return type === "asc"
// 		? arr.sort((a, b) => a - b)
// 		: arr.sort((a, b) => b - a);
// } - even shorter