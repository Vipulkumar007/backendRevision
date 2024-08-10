const http = require("http");

//hmne ek server bnaya or use server variable m store kr lia and later use ek port m listen kia
const server = http.createServer(function(req,res){
    res.end("Hello there");
})

server.listen(3000);