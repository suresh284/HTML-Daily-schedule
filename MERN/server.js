const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var corsOptions={origin:true}
app.use (cors(corsOptions));

app.post('/api/news',(req,res)=>{
    
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

//import data base
const db = require('./Models');
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Connected to Database')
})
.catch(err=>{
    console.log('cannot connect to database')
    process.exit()
})

//routes
require('../MERN/Routes/news.route')(app)

const Port = 5000

app.listen(Port,()=>{
    console.log('server started');
})