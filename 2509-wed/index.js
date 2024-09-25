//import module
// const http = require("http")
// //create a http server
// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// })
// //set the port for the server
// server.listen(3000,()=>{
//     console.log("server connected")
// })

// npm  i/install  package-name 


const express = require("express")

const app = express()

//post,get,put,delete,patch

app.get("/getdata",(req,res)=>{
    res.send("hi there")
})

app.listen(3000,()=>{
    console.log("server connected")
})
