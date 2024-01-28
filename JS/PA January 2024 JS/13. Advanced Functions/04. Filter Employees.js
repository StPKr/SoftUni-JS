// function sorter(data, criteria) {
//     let employees = JSON.parse(data);
//     let [key, value] = criteria.split("-");
//     let counter = 0;
//     for (let employee of employees) {
//         if (employee[key] === value) {
//             console.log(counter + ". " + employee.first_name + " " + employee.last_name + " - " + employee.email);
//             counter++;
//         }
//     }
// }

function sorter(string, criteria) {
    let parsedArray = JSON.parse(string);
    criteria === "all"
        ? parsedArray.forEach((obj, i) => console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`))
        : parsedArray
            .filter((obj) => {
                let [critKey, critValue] = criteria.split("-");
                return obj[critKey] === critValue;
            })
            .forEach((obj, i) => {
                console.log(
                    `${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`
                );
            });
}
sorter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
)