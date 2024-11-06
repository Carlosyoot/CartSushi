
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
updateCartNotification();
renderCartItems();
function addToCart(item) {
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartNotification();
    renderCartItems();
    alert(item + ' foi adicionado a comanda!');
}
function updateCartNotification() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cartItems.length;
    cartCount.style.display = cartItems.length > 0 ? 'flex' : 'none';
}
function toggleCart() {
    const cartContent = document.getElementById('cartContent');
    if (cartContent.style.display === 'none' || cartContent.style.display === '') {
        cartContent.style.display = 'flex'; 
    } else {
        cartContent.style.display = 'none'; 
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; 
    if (cartItems.length === 0) {
        cartItemsContainer.textContent = 'Nenhuma refeição adicionada';
    } else {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `<span>${item}</span> <button onclick="removeFromCart(${index})">Remover</button>`;
            cartItemsContainer.appendChild(itemElement);
        });
    }
}
function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartNotification();
    renderCartItems();
}
function checkout() {
    if (cartItems.length > 0) {
        alert('Compra finalizada com sucesso');
        cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartNotification();
        renderCartItems();
        toggleCart();
    } else {
        showModal();
    }
}
function showModal() {
    document.getElementById('errorModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
}
