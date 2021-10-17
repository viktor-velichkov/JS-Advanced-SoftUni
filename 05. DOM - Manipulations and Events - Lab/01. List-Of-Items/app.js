function addItem() {
    let text = document.getElementById('newItemText').value;
    const newElement = document.createElement('li');
    newElement.textContent = text;
    document.getElementById('items').appendChild(newElement);
}