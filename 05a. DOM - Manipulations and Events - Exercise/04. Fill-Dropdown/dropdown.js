function addItem() {
    let textField = document.getElementById('newItemText')
    let text = textField.value;
    let valueField = document.getElementById('newItemValue')
    let value = valueField.value;

    const newElement = document.createElement('option');
    newElement.value = value;
    newElement.textContent = text;

    document.getElementById('menu').appendChild(newElement);
    textField.value = '';
    valueField.value = '';
}