function sumTable() {

    const rows = Array.from(document.querySelectorAll('table tr'));

    let sum = 0;

    for (let i = 1; i < rows.length; i++) {
        let rowChildren = rows[i].children;
        const lastChild = rowChildren[rowChildren.length - 1];

        sum += Number(lastChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
};