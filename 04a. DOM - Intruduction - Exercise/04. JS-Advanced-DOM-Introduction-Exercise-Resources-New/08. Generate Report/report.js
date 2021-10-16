function generateReport() {
    const checkedHeaders = Array.from(document.querySelectorAll('table thead tr th'))
        .map((v, i) => { return { index: i, name: v.textContent.trim().toLowerCase(), selected: v.children[0].checked } })
        .filter((v) => v.selected);

    const dataRows = Array.from(document.querySelectorAll('table tbody tr'));
    const result = [];
    dataRows.forEach(row => {
        const element = {};
        const children = row.children;
        checkedHeaders.forEach(header => {
            element[header.name] = children[header.index].textContent;
        })
        result.push(element);
    })

    document.getElementById('output').textContent = JSON.stringify(result);


}