//in built methods of array
// map filter reduce sort reverse
// for each for in
var arr = [1,3,2,4,6,32,22]
//map

var new_arr = arr.map((item,index)=>{
    return item + 1
})
console.log(new_arr)
console.log(arr)
//for each
arr.forEach((item,index)=>{
    console.log(item + 1)
})

//filter 
var filter_arr = arr.filter((item,index)=>{
    return item !== 1
})
console.log(filter_arr)

//reduce 

var sum = arr.reduce((accumulator,item)=>{
    
    accumulator+= item
    return accumulator
})
console.log(sum)
var string_arr = ["orange","apple","strawberry"]
//sort
string_arr.sort()
console.log(string_arr)

//reverse

arr.reverse()
console.log(arr)


//for in
for(let item in arr){
    console.log(item)
}


//HOISTING **

// var -- global scoped 
// let,const -- block scoped



