//http: helps create a http server
//fs: file system (read or write files)
//
const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to MERN class');
    res.end();
})


server.listen(3000,()=>{
    console.log("server connected")
})