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


// var string_arr = ["orange","apple","strawberry"] -> f
// ["orfnge","fpple","strfwberry"];
for(let i = 0;i<string_arr.length;i++){
    string_arr[i] = string_arr[i].replaceAll("a","f")
}
console.log(string_arr)



//Array inbuilt functions
//for each, for in
//map,reduce, filter

var arr = [1,2,3,4,5]
//length
console.log(arr.length)
//toString,
var string_value = arr.toString()
console.log(string_value)
//at
console.log(arr.at(2))
//join
var joined_arr = arr.join("*")
console.log(joined_arr)
//pop
arr.pop()
console.log(arr)
//push
arr.push(10)
console.log(arr)
//shift
arr.shift()
console.log(arr)
//unshift
arr.unshift(22)
console.log(arr)
//delete : undefined hole
delete arr[2]
console.log(arr)
//concat
var arr2 = [33,44,23,34]
var concat_arr = arr.concat(arr2)
console.log(concat_arr)
//copyWithin
var copr_arr = ["HTML","CSS","JS","REACT"]
copr_arr.copyWithin(2,0)
console.log(copr_arr)
//flat
var arr_2d = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr_2d)
var newArr = arr_2d.flat()
console.log(newArr)
//splice: str_idx,count, elements
newArr.splice(2,2,39,49)
console.log("spliced: ",newArr)
//slice: str_idx,ed_idx
console.log(newArr.slice(4,))

//for each
var a = [1,2,3,4,5,6]
a.forEach((item)=>{
    item += 10
})
// map
var ab = a.map((item)=>{
   return item += 10
})
console.log("map: ",ab)
// filter
var ac = a.filter((item)=>{
    return item % 2 === 0
})
console.log("filter: ",ac)
//for in
for(let itr in a){
    a[itr] += 10
}

console.log("forin: ",a)

//reduce
var initial  = 20
var b = a.reduce((acc,item)=>{
    return acc + item
},initial)
console.log(b)


var arrays = [1,3,2,4,3]
var value = 20;
var d = arrays.reduce((acc,item)=>{
    return acc + item
},value)

//reduce(callbackfn,initial)
console.log("reduced+ value: ",d)


