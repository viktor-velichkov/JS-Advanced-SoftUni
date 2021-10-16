function solve() {

    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = '';

    let text = document.getElementById('input').value;

    const paragraphs = text.split('.').filter((el) => el.length > 0);

    const result = [];

    for (let i = 0; i < paragraphs.length; i += 3) {
        let paragraphContent = '';
        for (let j = 0; j < 3; j++) {
            console.log(paragraphs[i + j]);
            paragraphs[i + j] != undefined && paragraphs[i + j] != '' ? paragraphContent += paragraphs[i + j] + '.' : true;
        }
        result.push(paragraphContent.trim());
    }

    if (result.length > 0) {
        result.forEach(paragraph => {
            const newParagraphElement = document.createElement('p');
            newParagraphElement.textContent = paragraph;
            outputDiv.appendChild(newParagraphElement);
        })
    }
}