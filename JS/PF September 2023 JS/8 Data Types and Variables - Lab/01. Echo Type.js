function solve(param) {
    const dataType = typeof param;
    console.log(dataType);
    if (dataType == 'string' || dataType == 'number') {
    console.log(param);
    } else {
    console.log('Parameter is not suitable for printing');
    }
   }
solve(18)