function extractText() {
    const elements = document.getElementById('items').children;

    const values = [];

    Array.from(elements).forEach(element => {
        values.push(element.textContent);
    });

    document.getElementById('result').value = values.join('\n');
}