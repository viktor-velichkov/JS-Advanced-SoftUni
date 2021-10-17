function solve() {
    document.querySelector('.shopping-cart').addEventListener('click', addToCart);
    document.querySelector('.checkout').addEventListener('click', checkOut);
    const cart = { products: [], totalPrice: 0 };

    function addToCart(e) {

        const target = e.target;
        if (target.nodeName == 'BUTTON' && target.className == 'add-product') {
            const product = target.parentElement.parentElement;

            let productName = product.querySelector('.product-title').textContent;
            let productprice = Number(product.querySelector('.product-line-price').textContent);

            let result = `Added ${productName} for ${productprice.toFixed(2)} to the cart.\n`;

            document.querySelector('textarea').value += result;

            if (!cart.products.some(product => product == productName)) {
                cart.products.push(productName);
            }
            cart.totalPrice += productprice;
        }

        console.log(cart);
    }

    function checkOut() {

        document.querySelector('textarea').value += `You bought ${cart.products.join(', ')} for ${cart.totalPrice.toFixed(2)}.`;
        Array.from(document.querySelectorAll('button')).forEach(button => button.disabled = true);
    }
}