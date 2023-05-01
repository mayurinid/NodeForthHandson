const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
function FirstMiddleWare(req, res, next) {
console.log('i am First Middleware running')
next()
}
function SecondMiddleWare(req, res, next) {
    console.log('i am Second Middleware running')
    next()
    }
app.get("/First",FirstMiddleWare,(req,res)=>{
    console.log("I am verifiying First Middleware");
    res.send("Hello")
})
app.get("/Second",SecondMiddleWare,(req,res)=>{
    console.log("I am verifiying Second Middleware");
    res.send("Hello World")
})
const port=process.env.PORT
app.listen(port,console.log(`server is run in port ${port}`))