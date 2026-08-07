let cartContainer = document.getElementById("cart-container");

function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div id="empty-message">
                Your cart is empty.
            </div>
        `;

        return;
    }

    cart.forEach(function(user) {

        let card = document.createElement("div");

        card.className = "cart-card";

        card.innerHTML = `
            <h3>${user.name}</h3>

            <p>
                <strong>Username:</strong>
                ${user.username}
            </p>

            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>

            <button
                class="delete-btn"
                onclick="deleteUser(${user.id})">
                Delete
            </button>
        `;

        cartContainer.appendChild(card);
    });
}

function deleteUser(userId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart = cart.filter(function(user) {
        return user.id !== userId;
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

displayCart();