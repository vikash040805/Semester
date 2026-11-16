// Middleware in Express 
// Middleware is a function which will act as a barrier/runs with between the request and response

const express=require('express')
const app=express()
// express can't decide which data is coming, it confuses between file type, json type,
// that's why it returns undefined


app.use(express.json()) // to let know express that coning data is json data

const validationMiddleware=(req,res,next)=>{
    const {email, password}=req.body
    if(!email || !password){
        res.send("Enter Credentials first")
    }else if(!email.includes("@")||!email.endsWith(".com")){
        res.send("enter valid email")
    }else{
        console.log("validation checked")
        next()
    }
     //this will proceed to the next middleware or route handler

}
const authMiddleware=(req,res,next)=>{
    const {email,password}=req.body
    const useremail="vikash@gmail.com"
    const userpassword="12345"
    if(email==useremail && password ==  userpassword){
        next()
    }else{
        res.status(400).send("Please enter valid email and password")
    }

    next()
}





app.get("/",(req, res)=>{
    res.send("Welcome to homepage")
})
// app.use(validationMiddleware)
// app.use(authMiddleware)
app.get("/profile",validationMiddleware, authMiddleware,(req, res)=>{
    res.send("Welcome to my profile page")
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})
app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})
