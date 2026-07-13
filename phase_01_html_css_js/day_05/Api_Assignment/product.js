// Api --> it is an interface through which system can communicate
// if you want to bring data from server you can use api
// https: fakeproducts.com --> raw data provided by server

// fetch --> it will pull response from an api
// fetch("url", [get, post,pull, patch, delete])
let container=document.getElementById("container")
let response=fetch("https://dummyjson.com/products").then(function(res){
    return res.json()
}).then(function(data){
    // console.log(data.products)
    for(el of data.products){
        container.innerHTML+=`
        <div>
            <img src="${el.images[0]}" alt="">
            <h3>${el.title}</h3>
            <p>Brand: ${el.brand}</p>
            <p>Price: ${el.price}</p>
            <button id="cart">Add To cart </button>
        </div>
        `
    }
let cartBtn=document.querySelectorAll("#cart")

for(let el of cartBtn){
    
    el.addEventListener("click",()=>{
        alert("Button is triggered")
        Cart.innerText++;
    })
}


})




