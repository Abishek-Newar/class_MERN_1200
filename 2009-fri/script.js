//async await
//fetch

//API : Application Programming Interface
fetch('https://dummyjson.com/products')
.then((data)=>data.json())
.then((res)=>console.log(res))

async function serverCall(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
}

serverCall()

//backend calls methods:  POST,GET,PUT,DELETE,PATCH
//POST: to insert/write data
//GET: to ge data from backend
//delete: to delete data from backend
//patch: partial update
//put: full data

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved in promise 1")
    },3000)
})
console.log(promise1)
async function promiseHAndle (){
    const data = await promise1
    console.log(data)
}
promiseHAndle()
