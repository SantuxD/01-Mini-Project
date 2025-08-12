const express = require("express")
const port = 8000;

const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to Home page")
})
app.listen(port,(req, res)=>{
    console.log(`Server started at port ${port}`);

})