function lockedProfile() {
    [...document.querySelectorAll('button')].forEach(btn => {
        btn.addEventListener('click', listener)
    });

    function listener() {
        let command = this.textContent;
        const parent = this.parentElement;
        const children = Array.from(parent.children);
        const isLocked = children.find(child => child.value == 'lock').checked;

        if (!isLocked) {
            if (command == 'Show more') {
                showMore(this);
            } else if (command == 'Hide it') {
                hideIt(this);
            }
        }

        function showMore(element) {
            children.find((child) => String(child.id).indexOf('HiddenFields') != -1).style.display = 'block';
            element.textContent = 'Hide it';
        }

        function hideIt(element) {
            children.find((child) => String(child.id).indexOf('HiddenFields') != -1).style.display = '';
            element.textContent = 'Show more';
        }


    }
}