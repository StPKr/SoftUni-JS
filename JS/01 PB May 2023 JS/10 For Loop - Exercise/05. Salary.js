// ммое решение
// function salary(input) {
//     let openTabs = Number(input[0]);
//     let salary = Number(input[1]);
//     let fbCounter = 0;
//     let igCounter = 0;
//     let redCounter = 0;
//     let openedTab;
//     for (let i = 2; i < input.length; i++) { //важно input.length
//         openedTab = input[i];
//         if (openedTab === "Facebook") {
//             fbCounter++;
//         } else if (openedTab === "Instagram") {
//             igCounter++
//         } else if (openedTab === "Reddit") {
//             redCounter++
//         }
//     }
//     let sum = fbCounter * 150 + igCounter * 100 + redCounter * 50;
//     if (salary > sum) {
//         console.log(salary - sum);
//     } else {
//         console.log("You have lost your salary.");
//     }
// }
// salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);

// решение от курса
function demo(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    for (let index = 2; index < input.length; index++) {
        let currentTab = input[index];
        switch (currentTab) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(Math.floor(salary));
    }
}
demo(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
