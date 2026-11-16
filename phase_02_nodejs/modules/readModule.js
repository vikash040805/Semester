const fs=require("fs")

// const data=fs.readFileSync("students.txt","utf-8")
// console.log(data)

console.log("start")
fs.readFile("students.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }
    console.log(data)
})
console.log("End")

fs.mkdir("college",(error)=>{if(error)console.log(error)})
fs.readdir("college",(error,files)=>{
    console.log(files)
})