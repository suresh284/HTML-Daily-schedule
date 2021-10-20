const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

// Static route
app.get('/about',(req,res)=>{
    res.send(`<h2>Welcome to about page</h2>`)
})

//Dynamic route
app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    res.send(`<h3>About user ${id}</h3>`)
})

//Controller route
const controller = require('./Controller/controller')
app.get('/products',controller.products)

//404
app.use(function(req,res,next){
    res.status(404).send(`<h3>Page not found</h3>`)
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server started at port`)
})