let users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net"
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org"
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca"
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info"
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz"
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me"
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io"
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz"
    }
];


let userContainer = document.getElementById("user-container");


function displayUsers() {

    userContainer.innerHTML = "";

    users.forEach(function(user) {

        let card = document.createElement("div");

        card.className = "user-card";

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

            <button class="add-btn" onclick="addToCart(${user.id})">
                Add to Cart
            </button>
        `;

        userContainer.appendChild(card);
    });
}


function addToCart(userId) {

    let selectedUser = users.find(function(user) {
        return user.id === userId;
    });

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    let alreadyExists = cart.some(function(user) {
        return user.id === userId;
    });


    if (alreadyExists) {

        alert("User is already in the cart!");

        return;
    }

    cart.push(selectedUser);

    localStorage.setItem("cart", JSON.stringify(cart));


    alert("User added to cart!");
}

displayUsers();