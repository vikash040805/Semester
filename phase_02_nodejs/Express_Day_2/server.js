const express=require("express")
const app=express()
const fs=require("fs")
app.use("/", (req,res)=>{
    res.send("Welcome to homepage")
})
app.listen(8080, ()=>{
    console.log("Server is running in http://localhost:8080")
})
// Get and Post request on users route
app.get("/users",(req, res)=>{
    const data=fs.readFileSync("db.json","utf-8")
    const users=JSON.parse(data)
    res.send(users)
})

app.post("/users",(req, res)=>{
    const data=fs.readFileSync("db.json","utf-8")
    const users_array=JSON.parse(data)
    const newUser={id:users_array.users.length+1,...req.body}
    const check_user=users_array.users.find(user=>user.email===newUser.email)
    if(check_user){
        res.send("User already exists")
        return
    }else{
    users_array.users.push(newUser)
    fs.writeFileSync("db.json", JSON.stringify(users_array))
    res.send("Data Saved Successfully, please check db.json file")
    }
})
app.get("/users/:id",(req, res)=>{
    const userId=+req.params.id
    const data= fs.readFileSync("db.json", "utf-8")
    const users_array=JSON.parse(data)
    const find_user=users_array.users.find((el)=>el.id==userId)
    if(find_user){
        res.send(find_user)
    }else{
        res.send("User not found")
    }

})
app.delete("/users/:id",(req, res)=>{
    const userId=+req.params.id
    const data= fs.readFileSync("db.json", "utf-8")
    const users_array=JSON.parse(data)
    const find_user=users_array.users.find((el)=>el.id==userId)
    if(find_user){
        const new_users_array=users_array.users.filter((el)=>el.id!==userId)
        users_array.users=new_users_array
        fs.writeFileSync("db.json", JSON.stringify(users_array))
        res.send("User deleted successfully")
    }else{
        res.send("User not found")
    }
})
app.put("/users/:id",(req, res)=>{
    const userId=+req.params.id
    const data= fs.readFileSync("db.json", "utf-8")
    const users_array=JSON.parse(data)
    const find_user=users_array.users.find((el)=>el.id==userId)
    if(find_user){
        const updated_user={...find_user,...req.body}
        const new_users_array=users_array.users.map((el)=>el.id===userId?updated_user:el)
        users_array.users=new_users_array
        fs.writeFileSync("db.json", JSON.stringify(users_array))
        res.send("User updated successfully")
    }else{
        res.send("User not found")
    }
})
