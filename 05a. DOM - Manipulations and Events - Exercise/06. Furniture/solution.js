function solve() {

    document.getElementById('exercise').addEventListener('click', listener);

    function listener(e) {
        const button = e.target;
        const buttonText = String(button.textContent).toLowerCase();
        const cart = {}
        if (buttonText == 'generate') {
            generate();
        } else if (buttonText == 'buy') {
            buy();
        }

        function generate() {
            const furniture = JSON.parse(document.querySelector('textarea').value);
            const tableBody = document.querySelector('tbody');
            furniture.forEach(element => {
                const newRow = document.createElement('tr');

                const rowElements = [];

                const image = document.createElement('img');
                image.src = element.img;
                rowElements.push(image);

                const name = document.createElement('p');
                name.textContent = element.name;
                rowElements.push(name);

                const price = document.createElement('p');
                price.textContent = element.price;
                rowElements.push(price);

                const decFactor = document.createElement('p');
                decFactor.textContent = element.decFactor;
                rowElements.push(decFactor);

                const thickBox = document.createElement('input');
                thickBox.type = 'checkbox'
                rowElements.push(thickBox);

                for (i = 0; i < rowElements.length; i++) {
                    const td = document.createElement('td');
                    td.appendChild(rowElements[i]);
                    newRow.appendChild(td);
                }
                tableBody.appendChild(newRow);
            });
        }

        function buy() {
            const boughtProducts = Array.from(document.querySelectorAll('tbody tr'))
                .filter(element => element.lastElementChild.lastElementChild.checked == true)

            const boughtFurniture = boughtProducts.map(element => element.children[1].lastElementChild.textContent);
            let totalPrice = boughtProducts.map(element => Number(element.children[2].lastElementChild.textContent))
                .reduce((a, b) => a + b);
            let avgDecFactor = boughtProducts.map(element => Number(element.children[3].lastElementChild.textContent))
                .reduce((a, b) => a + b) / boughtProducts.length
            let result = '';

            result += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
            result += `Total price: ${totalPrice.toFixed(2)}\n`;
            result += `Average decoration factor: ${avgDecFactor}`;

            Array.from(document.querySelectorAll('textarea')).find(textarea => textarea.disabled == true).value = result;
        }



    }
}