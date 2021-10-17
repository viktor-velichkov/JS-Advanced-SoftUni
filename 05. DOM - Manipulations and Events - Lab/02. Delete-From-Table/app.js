function deleteByEmail() {
    const input = document.querySelector('[name="email"]').value;
    let result = 'Not found.';
    const rowToRemove = Array.from(document.querySelectorAll('table tbody tr'))
        .find((row) => row.children[1].textContent === input);

    if (rowToRemove != undefined) {
        rowToRemove.remove();
        result = 'Deleted.';
    }

    document.getElementById('result').textContent = result;

}