let cardContainer=document.getElementById("cardContainer")


let fetchData=async(dish="")=>{
    let response=await fetch(`https://dummyjson.com/recipes/search?q=${dish}`)
    let data=await response.json()
    let arr=data.recipes
    cardContainer.innerHTML=""
    arr.forEach((el,index)=>{
        cardContainer.innerHTML+=`
        <div id="d-${index}">
        <img src="${el.image}"
        <h3>${el.name}</h3>
        <p>Time: ${el.prepTimeMinutes}</p>
        <button onclick="handleDelete(${index})">Delete</button>
        </div>
        `
    })
}
fetchData()

function handleDelete(id){
    let div=document.getElementById(`d-${id}`)
    div.remove()
}
function handleSubmit(){
    let inp=document.getElementById("search").value
    fetchData(inp)
}