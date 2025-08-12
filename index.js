const express = require("express")
const port = 8000;

const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to Home page")
})

app.get("/product", (req, res)=>{
 res.send("This is Product details")   
})

app.get("/contact",(req, res)=>{
    res.send("Contact Me")
})

app.get("/aboutus",(req, res)=>{
    res.send("This is about us page")
})

app.post("/signup", (req, res)=>{
    res.send("Sign up")
})


app.listen(port,()=>{
 console.log(`Server started at port ${port}`);

})