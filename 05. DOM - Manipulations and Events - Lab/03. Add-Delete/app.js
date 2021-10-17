function addItem() {
    let text = document.getElementById('newItemText').value;
    const newElement = document.createElement('li');
    newElement.textContent = text;
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = '[Delete]';
    anchor.addEventListener('click', deleteElement);
    newElement.appendChild(anchor);
    document.getElementById('items').appendChild(newElement);

    function deleteElement(ev) {
        this.parentElement.remove();
    }
}