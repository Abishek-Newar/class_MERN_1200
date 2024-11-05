// //async await
// //fetch

// //API : Application Programming Interface
// fetch('https://dummyjson.com/products')
// .then((data)=>data.json())
// .then((res)=>console.log(res))

// async function serverCall(){
//     const res =  fetch('https://dummyjson.com/products')
//     const data = res.json()
//     console.log(data)
// }

// serverCall()

// //backend calls methods:  POST,GET,PUT,DELETE,PATCH
// //POST: to insert/write data
// //GET: to ge data from backend
// //delete: to delete data from backend
// //patch: partial update
// //put: full data

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved in promise 1")
//     },3000)
// })
// console.log(promise1)
// async function promiseHAndle (){
//     const data = await promise1
//     console.log(data)
// }
// promiseHAndle()


// const box = document.getElementById("box")
// function changes(){
//     document.getElementById("text").innerText = Math.random();
// }
// box.addEventListener("mouseenter",changes)

// function removeE(){
//     box.removeEventListener("mouseenter",changes)
// }


// //setimeout(fucntion,timoeout)
// setTimeout(() => {
//     console.log("hi there")
// }, 3000);

// //setinterval(function,interval)
//  const interaval = setInterval(()=>{
//     console.log("interval")
// },2000)

// clearInterval(interval)


//promises

// const promise1 = new Promise((resolve,reject)=>{
//     resolve("resolved in 1")
// })
// const promise2 = new Promise((resolve,reject)=>{
//     resolve("resolved in 2")
// })

// const promise3 = new Promise((resolve,reject)=>{
//     resolve("resolved in 3")
// })


// promise1
// .then((msg)=>{console.log(`caught in then ${msg}`)})
// .catch((msg)=>{console.log(`caught in catch ${msg}`)})


//promise.all

// Promise.all([promise1,promise2,promise3])
// .then((msg)=>{console.log(`caught in then ${msg}`)})
// .catch((msg)=>{console.log(`caught in catch ${msg}`)})
//then catch


//fetch: backends apis data transfering
//async await: asynchrousity achieve
//hoisting
//sync vs async
//single threaded vs multithreaded


//fetch
// fetch('https://dummyjson.com/products')
// .then((data)=>data.json())
// .then((res)=>console.log(res.products))

//async await: always used with function

async function serverCall(){
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json()
    console.log(data.products)
    
    data.products.forEach(element => {
        var container = document.getElementById("container")
        var box = document.createElement("div")
        var image = document.createElement("img")
        var title = document.createElement("h1")
        var price = document.createElement("p")
        image.src = element.thumbnail;
        title.textContent = element.title;
        price.textContent = element.price;
        box.append(image)
        box.append(title)
        box.append(price)
        box.classList.add("box")
        container.append(box)
    });
}
serverCall()


