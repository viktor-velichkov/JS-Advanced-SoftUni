function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const value = document.querySelector('#inputs textarea').value;


        if (value !== '') {
            const input = JSON.parse(value);

            const restaurants = [];

            input.forEach(restaurant => {
                const tokens = restaurant.split(' - ');
                let name = tokens[0];
                const workers = tokens[1].split(', ').map((v) => { return { name: v.split(' ')[0], salary: v.split(' ')[1] } })
                    .sort((a, b) => b.salary - a.salary);
                const avgSalary = calculateAvgSalary(workers);
                const bestSalary = calculateBestSalary(workers);

                if (restaurants.some((v) => v.name == name)) {
                    const currentRestaurant = restaurants.filter((v) => v.name === name)[0];
                    console.log(currentRestaurant.workers);
                    workers.forEach(worker => {
                        currentRestaurant.workers.push(worker);
                    })

                    currentRestaurant.avgSalary = calculateAvgSalary(currentRestaurant.workers);
                    currentRestaurant.bestSalary = calculateBestSalary(currentRestaurant.workers);
                    currentRestaurant.workers.sort((a, b) => b.salary - a.salary);
                } else {
                    restaurants.push({
                        name: name,
                        workers: workers,
                        avgSalary: avgSalary,
                        bestSalary: bestSalary
                    });
                }
            });

            const bestRestaurant = restaurants.sort((a, b) => b.avgSalary - a.avgSalary)[0];
            let bestRestaurantOutput = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
            let bestRestWorkersOutput = '';
            bestRestaurant.workers.forEach(worker => {
                bestRestWorkersOutput += `Name: ${worker.name} With Salary: ${worker.salary} `;
            });


            document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
            document.querySelector('#workers p').textContent = bestRestWorkersOutput.trim();
        } else {
            document.querySelector('#bestRestaurant p').textContent = '';
            document.querySelector('#workers p').textContent = '';
        }



        function calculateAvgSalary(workers) {
            return getSalaries(workers)
                .reduce((a, b) => a + b) / workers.length;
        }

        function calculateBestSalary(workers) {
            return getSalaries(workers)
                .sort((a, b) => b - a)[0];
        }

        function getSalaries(workers) {
            return workers.map((v) => Number(v.salary));
        }

    }
}