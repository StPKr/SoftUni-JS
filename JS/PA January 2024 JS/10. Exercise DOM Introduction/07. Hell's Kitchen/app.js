function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector("textarea");
   const bestRestaurantInfo = document.querySelector("#bestRestaurant p");
   const bestRestaurantWorkers = document.querySelector("#workers p");

   function onClick() {
      let data = JSON.parse(textAreaRef.value);
      let result = {};

      for (let line of data) {
         let [name, workers] = line.split(" - ");
         if (!result.hasOwnProperty[name]) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }
         let currentWorkers = getArrOfWorkers(workers, result[name].workers);
         result[name].workers = sortWorkers(currentWorkers);
         updateSalary(result[name]);
      }
      let bestRestaurant = findBestRestaurant(result);
      appendBestRestaurantInfo(bestRestaurant);
      appendBestRestaurantWorkersInfo(bestRestaurant[1].workers);
   }

   function appendBestRestaurantWorkersInfo(workers) {
      let buff = "";
      workers.forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);

      bestRestaurantWorkers.textContent = buff;
   }

   function appendBestRestaurantInfo(data) {
      bestRestaurantInfo.textContent = `Name: ${data[0]} Average Salary: ${data[1].avgSalary.toFixed(2)} Best Salary: ${data[1].bestSalary.toFixed(2)}`;
   }

   function findBestRestaurant(restaurants) {
      return Object.entries(restaurants).sort((a, b) => {
         return b[1].avgSalary - a[1].avgSalary
      })[0];
   }


   function sortWorkers(works) {
      return works.sort((workerA, workerB) => workerB.salary - workerA.salary);
   }

   function updateSalary(restaurant) {
      let sumOfSalary = 0;
      let bestSalary = 0;
      restaurant.workers.forEach(worker => {
         sumOfSalary += worker.salary
         if (bestSalary < worker.salary) {
            bestSalary = worker.salary;
         }
      })
      restaurant.bestSalary = bestSalary;
      restaurant.avgSalary = sumOfSalary / restaurant.workers.length;
   }

   function getArrOfWorkers(workersData, existWorkers) {
      let arrOfWorkers = workersData.split(", ");
      for (let tokens of arrOfWorkers) {
         let [name, salary] = tokens.split(" ");
         salary = Number(salary);
         existWorkers.push({
            name,
            salary
         })
      }

      return existWorkers;
   }
}