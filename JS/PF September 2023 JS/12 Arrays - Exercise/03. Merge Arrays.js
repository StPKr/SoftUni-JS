function solve(arr1, arr2) {
    let arr3 = [];
    let elem1 = "";
    let elem2 = "";
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0){
            elem1 = Number(arr1[i]);
            elem2 = Number(arr2[i]);
        } else {
            elem1 = arr1[i];
            elem2 = arr2[i];
        }
        arr3.push(elem1+elem2);
    }
    console.log(arr3.join(" - "))
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);