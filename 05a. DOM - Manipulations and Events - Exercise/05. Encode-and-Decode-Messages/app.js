function encodeAndDecodeMessages() {
    Array.from(document.querySelectorAll('button')).forEach(button => {
        button.addEventListener('click', onClick);
    });

    function onClick() {
        const parent = this.parentElement;
        const currentTextArea = parent.children[1];
        const text = currentTextArea.value;
        const buttonText = String(this.textContent).toLowerCase();
        let result = '';
        if (buttonText.startsWith('encode')) {
            for (let i = 0; i < text.length; i++) {
                result += String.fromCharCode(text.charCodeAt(i) + 1);
            }

        } else if (buttonText.startsWith('decode')) {
            for (let i = 0; i < text.length; i++) {
                result += String.fromCharCode(text.charCodeAt(i) - 1);
            }
        }

        document.getElementById('main').children[0].children[1].value = '';
        document.getElementById('main').children[1].children[1].value = result;

    }
}