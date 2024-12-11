//http: helps create a http server
//fs: file system ( file read and write)
//path: 
//os: operating system
//events: event handling

const express = require("express")
const todo = require("./db");


//create server

const app = express()

app.use(express.json())

//CRUD
//C -> create  ->POST
app.post("/create",async(req,res)=>{
    const body = req.body;
    try {
        const response = await todo.create({
            title: body.title,
            description: body.description,
            done: false
        })
        res.send("todo added")
    } catch (error) {
        console.log("error while adding todo",error)
        res.send("error")
    }
})

//R -> READ -> GET
app.get("/get",async(req,res)=>{
    try {
        const response = await todo.find({});
        res.json(response)
    } catch (error) {
        console.log("error while getting data",error)
        res.send("error while getting data")
    }
})

//U -> update -> put 
app.put("/put",async(req,res)=>{
    const body = req.body
    try {
        const response = await todo.updateOne({_id: body.id},{
            title: body.title,
            description: body.descrption,
            done: false
        })
        res.send("updated")
    } catch (error) {
        console.log("error while updating data",error)
        res.send("error while updating data")
    }
})

//D -> Delete -> delete 
app.delete("/delete",async(req,res)=>{
    const body = req.body
    try {
        const response = await todo.deleteOne({_id: body.id})
        res.send("todo deleted")
    } catch (error) {
        console.log("error while deleting data",error)
        res.send("error while deeleting data")
    }
})


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



app.listen(3000, () => {
    console.log("port connected")
})