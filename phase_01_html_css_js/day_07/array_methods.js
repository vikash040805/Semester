let arr=[2,3,4,5,6]

// to reduce the lines of code
// easy to read 
// mostly used in react
// foreach 

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
// A function which takes another function 
// as an argument then it is higher order function

arr.forEach((e)=>console.log(e)) // e is the element of the array
 
//map --> return array
// item --> 2
// item --> 3
let sq=arr.map((item)=>{
    return item**2
})
console.log(sq) // [4, 9, 16, 25, 36]

let products=[
    {"name":"Iphone-15","price":70000},
    {"name":"Samsung-Galaxy","price":90000},
    {"name":"Motorola","price":20000}
]
let prices=products.map((item)=>item.price) //item.price because we want to get the price of each product
let names=products.map((item)=>item.name.toUpperCase()) 
console.log(prices) // [70000, 90000, 20000]
console.log(names) // ["IPHONE-15", "SAMSUNG-GALAXY", "MOTOROLA"]


let num=[30,12,14,15,7,18,23,27]
let even=num.filter((el)=>{
    return el%2==0
})
console.log(even) // [30, 12, 14, 18]


let even1=num.map((el)=>el%2==0)
console.log(even1) // [true, true, true, false, false, true, false, false]

// reduce --> return single value
// mathematical operation on your array and 
// return single value

let numbers=[10,50,20] //7+10 +50+20

let result=numbers.reduce((acc,el)=>{
    return acc+el
},7)
// accumulator --> starting value of any result

console.log("result: ",result) 

// sort

let ages=[10,2,6,30,69]
let names1=["John","Alice","Bob","Charlie"]
console.log(names1.sort()) // [10, 2, 30, 6, 69] --> it is sorting in string format
console.log(ages.sort((a,b)=>a-b)) // [2, 6, 10, 30, 69] --> it is sorting in number format
console.log(ages.sort((a,b)=>b-a)) // [69, 30, 10, 6, 2] --> it is sorting in number format in descending order


// concept of mutability
sortedAges=ages.sort((a,b)=>a-b)
console.log("sortedAges: ",sortedAges)// it will give the sorted in ascending because last operation is ascending and it modifies the original array // [2, 6, 10, 30, 69]
decandingAges=ages.sort((a,b)=>b-a)
console.log("sortedAges: ",sortedAges) // it will give the sorted in ascending because last operation is ascending and it modifies the original array // [69, 30, 10, 6, 2]
console.log("decandingAges: ",decandingAges) // [69, 30, 10, 6, 2]