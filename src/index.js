const express = require('express');
const PORT = 3000
const app= express()

app.use(express.json());
app.use(express.urlencoded());
app.listen(PORT,()=>{
    console.log(`Running express server on Port ${PORT}`)
})

app.get('/groceries',(req,res,next)=>{
    console.log('middleware')
    next()
},(req,res)=>{
    res.send([{
        item:'milk',
        chocolat:'3'
    },{
        item:'peanut',
        eating:'yes'
    }])
}
)

app.post('/groceries',(req,res)=>{
    console.log(req.body);
    res.send(201);
})