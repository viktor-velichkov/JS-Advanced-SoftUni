function attachGradientEvents() {
    const box = document.getElementById('gradient');
    box.addEventListener('mousemove', calculatePercent);

    function calculatePercent(event) {
        let result = Math.trunc(event.offsetX / this.clientWidth * 100);
        document.getElementById('result').textContent = result + '%';
    }
}