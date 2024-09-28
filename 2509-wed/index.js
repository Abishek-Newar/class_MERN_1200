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


// const express = require("express")

// const app = express()

// //post,get,put,delete,patch

// app.get("/getdata",(req,res)=>{
//     res.send("hi there")
// })

// app.listen(3000,()=>{
//     console.log("server connected")
// })



var a = "abc3241rasds/+="
console.log(a[4])

var b = [1,2,3,"abc",true]
console.log(b[4])


function sum (a,b){
    console.log(a+b)
}

sum(10,20)

const subs = (a)=>{
    let i = 1;
    while(i<=10){
        console.log(i*a)
        i+=1
    }
}
subs(32)
