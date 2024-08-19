const express = require("express");
const app = express();

app.get('/',function(req,res){
    res.send("Hello There");
})

app.get('/profile',function(req,res){
    res.send("This is the profile data");
})

app.listen(9000);