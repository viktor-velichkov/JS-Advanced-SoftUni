function validate() {
    const emailField = document.getElementById('email');
    emailField.addEventListener('change', validate);

    function validate() {
        const value = this.value;
        let valid = validateEmail(value);

        if (!valid) {
            this.className += ' error';
        } else {
            this.className = '';
        }

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
}