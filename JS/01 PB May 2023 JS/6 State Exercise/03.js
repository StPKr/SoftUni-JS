function time(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);
    let mm = 0
    if (m < 45) {
      console.log(`${h}:${m+15}`);
    } else if (m >= 45 && m < 50 && h != 23) {
      mm = (m + 15) % 60;
      h += 1;
      console.log(`${h}:0${mm}`);
    } else if (m >= 45 && m < 50 && h == 23) {
      mm = (m + 15) % 60;
      h = 0;
      console.log(`${h}:0${mm}`);
    } else if (m >= 50 && h != 23) {
      mm = (m + 15) % 60;
      h += 1;
      console.log(`${h}:${mm}`);
    } else if (m >= 50 && h == 23) {
      mm = (m + 15) % 60;
      h = 0
      console.log(`${h}:${mm}`);
    }
  }
  time(["12", "45"])