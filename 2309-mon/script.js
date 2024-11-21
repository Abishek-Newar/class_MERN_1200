// //set in javascript
// const set_name = new Set([1,2,3,4,1,2])
// //to add values to the set
// set_name.add("abc")

// console.log(set_name)
// //to check wheather a value exists in the set or not
// console.log(set_name.has("ab"))
// //to delete a element in the set
// set_name.delete("abc")
// console.log(set_name)
// //clear: to empty the set


// //MAPs
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// console.log(fruits)

// //set: add elements to the map
// fruits.set("kiwi",100)
// console.log(fruits.entries())


// //bitwise operator
// //AND
// //001
// //101
// //---
// //001

// //OR
// //101
// //010
// //---
// //111

// //XOR
// // becomes 1 if only one of them is 1
// // 111
// // 101
// //-----
// // 010

// //


// setTimeout(()=>{
//   console.log("hello")
// },3000)

// setInterval(()=>{
//   console.log("interval")
// },1000)

// // const promise1 = new Promise((resolve,reject)=>{
// //   setTimeout(()=>{
// //     reject("resolve from promise")
// //   },3000)
// // })

// // promise1.then((msg)=>{
// //   console.log(msg)
// // })


// const promise2 = new Promise((resolve,reject)=>{
//   reject("promise 2 resolved")
// })
// const promise3 = 10

// Promise.all([promise1,promise2,promise3]).then((msg)=>{
//   console.log(msg)
// }).catch((msg)=>{
//   console.log(msg)
// })

// function submit(){
//   const data  = localStorage.getItem("data")
//   const temp = {
//     title,
//     description,
//     image
//   }
//   data.push(temp)
//   localStorage.setItem("data",data)
// }


// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("promise 1 resolved")
//   },3000)
// })
// console.log(promise1)
// promise1.then((msg)=>{
//   console.log(msg)
// }).catch((msg)=>{
//   console.log("promise caught at reject",msg)
// })

// //promise.all
// const promise2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("promise 2 resolved")
//   },3000)
// })
// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("promise 3 resolved")
//   },3000)
// })

// Promise.all([promise1,promise2,promise3]).then((msg)=>{
//   console.log(msg)
// }).catch((msg)=>{
//   console.log("rejected at catch",msg)
// })


//fetch using then catch
// fetch('https://dummyjson.com/products')
// .then((res)=>res.json())
// .then((data)=>console.log(data))


async function fucntion_name(){
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  console.log(data)
  const container = document.getElementById("container")
  console.log(container)
  for(let i = 0;i<data.products.length;i++){
    const card = document.createElement("div")
    const image = document.createElement("img")
    const title = document.createElement("h1")
    const price = document.createElement("p")
    image.src = data.products[i].thumbnail
    title.textContent = data.products[i].title
    price.textContent = data.products[i].price
    card.append(image)
    card.append(title)
    card.append(price)
    card.classList.add("card")
    container.append(card)
  }
}

fucntion_name()


