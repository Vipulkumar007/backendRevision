const express = require("express");
const app = express();

//ye app.use ek middleware h jo bhi / route ko call krega browser to phle ye chlega
app.use(function(req,res,next){
    console.log("middleware chal gya");
    next();//this is writen so that after this go to route if this is not written it will not go to route
})

app.get('/',function(req,res){
    res.send("Hello There");
})

app.listen(8001);