//http: helps create a http server
//fs: file system ( file read and write)
//path: 
//os: operating system
//events: event handling

const express = require("express")
const {todo} = require("./db");
const {user} = require("./db")


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


//signup route

app.post("/signup",async(req,res)=>{
    //ask for data
    const body = req.body;
    try {
        //check if user already exist
        const check = await user.findOne({email: body.email})
        if(check){
            return res.json({msg: "user already exist"})
        }
        //data entry
        const response = await user.create({
            name: body.name,
            email: body.email,
            password: body.password
        })
        res.json({msg: "user created"})

    } catch (error) {
        console.log("error in signup",error)
        return res.json({msg: "error while signup"})
    }
})
//login route
app.post("/login",async(req,res)=>{
    //request body
    const body = req.body;
    try {
        //check the user
        const check = await user.findOne({
            email: body.email,
            password: body.password
        })
        //if not found
        if(!check){
            return res.json({msg: "user does ot exist please signup"})
        }
        //if found
        res.json({msg: "login succesful"})
    } catch (error) {
        console.log("error while login",error)
        return res.json({msg: "error while login"})
    }
})



app.listen(3000, () => {
    console.log("port connected")
})