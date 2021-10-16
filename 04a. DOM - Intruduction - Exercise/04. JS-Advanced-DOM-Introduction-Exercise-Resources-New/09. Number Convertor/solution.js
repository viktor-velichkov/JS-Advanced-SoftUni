function solve() {
    document.querySelector('button').addEventListener('click', solve)

    const selector = document.getElementById('selectMenuTo');

    selector.innerHTML = '';

    const bin = document.createElement('option');
    bin.value = 'binary';
    bin.innerHTML = 'Binary';
    selector.appendChild(bin);

    const hex = document.createElement('option');
    hex.value = 'hexadecimal';
    hex.innerHTML = 'Hexadecimal';
    selector.appendChild(hex);

    const input = Number(document.getElementById('input').value);

    const convertType = document.getElementById('selectMenuTo').value;

    let result = convertType === 'binary' ? convertToBinary(input) : input.toString(16).toUpperCase();
    document.getElementById('result').value = result;

    function convertToBinary(decimal) {
        let remainder;
        let result = [];
        if (decimal == 0) {
            return 0;
        } else {
            while (decimal > 0) {
                remainder = decimal % 2;
                decimal = Math.floor(decimal / 2);
                result.push(remainder);
            }
            return result.reverse().join('');
        }
    }
}