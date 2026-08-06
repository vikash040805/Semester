// Funcions
// if you want to repeat certain snippet of code multiple times then we can
// wrap that in one method which called funcions
 
function greet(){
    console.log("Welcome")

}
function calculateProduct(a,b){ 
    console.log(a*b)
}

calculateProduct(12,5)

function calculateSubraction(a,b){
    return a-b
}

// apidata ---> fetchFuncion --> console.log()

// let result=calculateProduct(5,4)+calculateSubraction(3,2)
// console.log(result)

// funcion Expression

let x=function(a,b){
    return a%b
}

console.log(x(10,3))

// Arrow Funtion
let checkEven=(a)=>a%2==0

// let prod=()=>{
//     let b=14
//     return a*b
// }
console.log(checkEven(10))

let checkNationality=(country)=>{
    return `Nationality of this person is ${country}`
}
let res = checkNationality("India")
console.log(res)
