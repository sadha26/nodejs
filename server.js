//import express module
var express=require('express')


var app=express()
var port=3000;


app.get('/',(req,res)=>{
    res.send("<h1>helloworld</h1>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>about us</h1>")
})
app.get('/user/:name',(req,res)=>{
    var userName=req.params.name;
    res.send(`hello,${username}!`);
})

app.listen(port,()=>{
    console.log('server is running')
})