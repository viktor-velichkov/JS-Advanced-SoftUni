function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(el => {
            el.addEventListener('focus', changeClass);
        });

    function changeClass() {
        Array.from(document.querySelectorAll('body div div')).forEach(element => {
            element.className = '';
        })
        this.parentElement.className = 'focused';
    }
}