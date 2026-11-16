const fs=require("fs")
console.log("start")
fs.appendFileSync("students.txt","Another Student Added")


console.log("end")
// fs.unlink("students.txt",(error)=>{
//     if(error){
//         return console.log("Error is", error)
//     }
//     console.log("File deleted")
// })