
const express = require('express')
const app = express()
// port
const port = 5000
var cors = require('cors')
app.use(cors())
// Home
app.get("/",(req,res)=>{
    res.send('Chef Is Running')
})
// Chef
const chefs = require('./data/ChefData.json')
app.get('/chef',(req,res)=>{
    res.send(chefs)
})
// 
app.get('/chef/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const selectedChef = chefs.find(chef=>chef.id === id)
    res.send(selectedChef)
})
// 
app.listen(port,()=>{
    console.log(`chef api is run in ${port}`)
})
// Done