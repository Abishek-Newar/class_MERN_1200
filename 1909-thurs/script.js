//asynchronous javascript

//async vs sync
// javascript is basically synchronous in nature but we can achive asynchronousity through different functions

//templete string
var c = 10
a = "string ${c}"
b = `string ${c}`  //+ interpolation
console.log(a)
console.log(b)

//settimeout ans setinterval
//settimeout: perform a task after certain time
//setinterval: perform a task multiple times after an interval
setTimeout(()=>{console.log("hey there from set timeout")},3000)
let ct = 1;
const itnerval = setInterval(()=>{
    if(ct === 5){
        clearInterval(itnerval)
    }
    console.log("hey there from set interval");
    ct++; 
},2000)


//Promise:
//3 stages: pending, fulfill(resolve), reject

const promise1 = new Promise((resolve,reject)=>{
    reject("resolved in promise 1")
})
const promise2 = new Promise((resolve,reject)=>{
    reject("resolved in promise 2")
})
const promise3 = new Promise((resolve,reject)=>{
    resolve("resolved in promise 3")
})
//then and catch: to handle promises

promise1.then((msg)=>console.log(`caught in then ${msg}`)).catch((msg)=>console.log(`caught in catch ${msg}`))

//promise.all
Promise.all([promise1,promise2,promise3]).then((msg)=>console.log(msg)).catch((msg)=>console.log(`caught in catch ${msg}`))

