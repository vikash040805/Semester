const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("Welcome to homepage")
})

app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})
let user={} // to store user data in memory, in real world we will use database to store user data
app.post("/register",async(req, res)=>{
    const {email, password} = req.body
    // const hashedPassword = bcrypt.hashSync(password, 10)
    // res.send(`User registered with email: ${email} and hashed password: ${hashedPassword}`)
    user={
        useremail: email,
        userpassword: await bcrypt.hash(password, 10)
    }
    res.send(`${JSON.stringify(user)} registered successfully`)
})
app.post("/login", async(req, res)=>{
    const {email, password} = req.body
    if(email==user.useremail && await bcrypt.compare(password, user.userpassword)){
        res.send("Login successful")
    }else{
        res.send("Invalid email or password")
    }
})