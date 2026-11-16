const express=require("express") //imported express framework
const fs=require("fs")
const app=express() // created express app here
// get,post,put, delete,patch
app.use(express.json()) // this is reading json-data client is sending to server
app.get("/",(req,res)=>{
    res.send("Welcome to Express Application")
})
app.get("/students",(req,res)=>{
    const data=fs.readFileSync("students.json","utf-8")
    const students=JSON.parse(data)
    // javascript object
    res.send(students)
})
app.post("/students",(req,res)=>{
    const data=fs.readFileSync("students.json","utf-8")
    const students=JSON.parse(data)
    const newStudent={"id":students.length+1,...req.body}
    students.push(newStudent)
    fs.writeFileSync("students.json",JSON.stringify(students))
    console.log(req.body)
    res.send("Student Submitted Successfully")
})
app.listen(8080,()=>{
    console.log("Server is running in http://localhost:8080/")
})