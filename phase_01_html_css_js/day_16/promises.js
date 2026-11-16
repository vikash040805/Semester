// java script is a singel threaded language
// Synchronous programming 

console.log("start")

// I want to get some daya from API
// let resp=fetch("https://dummyjson.com/products")
// console.log(resp)

//fetch => consume some time
//.     => js gives this task to browser
// => this will return promise

// promise ==> 
    // It is javascript object which will 
    // represent completion or rejection
    // of any operation

// Replies in three state
// Pending ==> data is going to avail at some time

// Succes ==> order is fullfilled 

// Reject ==> when any error comes

// async/await => handles promise
// let fetchData = async()=>{
//     let resp=await fetch("https://dummyjson.com/products")
//     let json_products=await resp.json()
//     console.log(json_products)
// }

// fetchData()

// .then method fetch api

// let resp=fetch("https://dummyjson.com/products").then((response)=>{
//     return response.json()
// }).then((json_products)=>{
//     console.log(json_products)
//     return fetch("https://dummyjson.com/recipes")
// }).then((response)=>response.json())
// .then((json_recipes)=> console.log(json_recipes))
// .catch((error)=>console.log(error))        // suppose net is off then this error will be executed 

// on single page
// First ==> user data

let ownPromise=new Promise((resolve,reject)=>{
    let status=false
    if(status){
        resolve("promise is resolved")
    }else{
        reject("promise is rejected")
    }
})
ownPromise.then((resp)=> console.log(resp))
            .catch((error)=>console.log(error))





console.log("end")
