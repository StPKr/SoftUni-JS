function num(input) {
    let n = Number(input[0]);
    let b = 0.0;
    if (n <= 100) {
      b = 5;
    } else if (n > 100 && n <= 1000) {
      b = n * 0.2;
    } else {
      b = n * 0.1;
    }
    if (n % 2 == 0) {
      b += 1;
    } else if (n % 10 == 5) {
      b += 2;
    }
    console.log(b);
    console.log(n + b);
  }
num(["175"])