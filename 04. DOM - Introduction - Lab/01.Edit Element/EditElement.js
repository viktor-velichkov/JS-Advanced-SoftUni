function editElement(element, match, replacer) {
    let text = element.textContent;

    while (text.indexOf(match) != -1) {
        text = text.replace(match, replacer);
    }

    element.textContent = text;

    console.log('done');
}