const express = require("express");
const app = express();
const data = require("./MOCK_DATA.json")

app.get("/",(req,res)=>{
    res.send("Welcome to the home page")
})
app.get("/users",(req,res)=>{
    res.send(data)
})
app.listen(8000,(req,res)=>{
    console.log("Server started on port 3000.")
})