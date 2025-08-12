const express = require("express")
const app = express()
const port = 8001

app.route("/books")
.get((req, res)=>{
    res.send("Getting data from books") 
})
.post((req, res)=>{
    res.send("Update data")
})
.delete((req, res)=>{
    res.send("Delete data")
})

app.route("/books/:id") 
.get((req,res)=>{
    res.send(`Getting data from Books ${req.params.id}`)

})
.post((req, res)=>{
    res.send(`Update data form books ${req.params.id}`)

})
.delete((req, res)=>{
    res.send(`Delete data from books ${req.params.id}`)

})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})