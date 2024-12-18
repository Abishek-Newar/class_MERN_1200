//http: helps create a http server
//fs: file system ( file read and write)
//path: 
//os: operating system
//events: event handling

const express = require("express")
const userRouter = require("./routes/user")
const todoRouter = require("./routes/todo")

//create server
require("dotenv").config()
const app = express()

app.use(express.json())

app.use("/user",userRouter)
app.use("/todo",todoRouter)

// const server = http.createServer(async (req, res) => {
//     if (req.method === 'POST' && req.url === "/") {
//         let body = '';
//         req.on('data', (chunk) => {
//             console.log(chunk)
//             body += chunk.toString()
//         })
//         req.on('end', async() => {
//             const parsedBody = JSON.parse(body)
//             console.log(parsedBody)
//             const response = await todo.create({
//                 title: parsedBody.title,
//                 description: parsedBody.description,
//                 done: false
//             })
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write('Done');
//             res.end();
//         })
//     }
// })

//url of database
// const uri = "mongodb+srv://abishekitm:abishek123@cluster0.syapi.mongodb.net/"

// //creating a mongo client
// const client  = new MongoClient(uri)

// function dbConnection(){
//     //connecting the client and handling promise
//     client.connect()
//     .then(()=>{
//         console.log("mongodb connected")
//     })
//     .catch(()=>{
//         console.log("error while conencting")
//     })
// }

// dbConnection()





app.listen(process.env.PORT, () => {
    console.log("port connected")
})