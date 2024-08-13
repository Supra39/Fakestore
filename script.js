// script.js

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const orderForm = document.getElementById('order-form');
    const productSelect = document.getElementById('product');

    // Hämta produkter från Fake Store API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                // Visa produkter på sidan
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <h3>${product.title}</h3>
                    <img src="${product.image}" alt="${product.title}">
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productList.appendChild(productDiv);

                // Lägg till produkter i beställningsformuläret
                const option = document.createElement('option');
                option.value = product.title;
                option.textContent = product.title;
                productSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    // Hantera beställningsformulär
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;

        db.collection('orders').add({
            name,
            address,
            product,
            quantity
        })
        .then(() => {
            alert('Order placed successfully!');
            orderForm.reset();
        })
        .catch(error => {
            console.error('Error placing order:', error);
        });
    });
});

//TODO * innan något, publicera några vers till github
//*try to access new funktions in firebase.js
// *try to se if they can be viewed from firebase console
// if not possible, try to show the existing code to gpt and make it adapt