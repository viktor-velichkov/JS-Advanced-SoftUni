function create(words) {
    const content = document.getElementById('content');
    words.forEach(word => {
        const divElement = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';
        divElement.appendChild(paragraph);

        divElement.addEventListener('click', showText);

        content.appendChild(divElement);

        function showText() {
            this.children[0].style.display = 'block';
        }

    });
}