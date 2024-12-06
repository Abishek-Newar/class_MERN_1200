//http: helps create a http server
//fs: file system ( file read and write)
//path: 
//os: operating system
//events: event handling


const http = require("http")

//import mongodb and mongoclient
const {MongoClient} = require("mongodb")


const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to this page!');
    res.end();
})

//url of database
const uri = "mongodb+srv://abishekitm:abishek123@cluster0.syapi.mongodb.net/"

//creating a mongo client
const client  = new MongoClient(uri)

function dbConnection(){
    //connecting the client and handling promise
    client.connect()
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch(()=>{
        console.log("error while conencting")
    })
}

dbConnection()



server.listen(3000,()=>{
    console.log("port connected")
})