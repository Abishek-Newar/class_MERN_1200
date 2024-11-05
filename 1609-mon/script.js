function sum(a,b){
    return a+b
}


var b = sum(10,20)
console.log(b)


const sumArrow = (a,b)=>{
    return a * b;
}

var c = sumArrow(10,20)
console.log(c)


//recursion


//factorial: 5! = 5 * 4*3*2*1 = 120
function recursion_function(a){
    if(a === 1){
        return 1
    }
    return a * recursion_function(a-1) //5 * 4 * 3 * 2 * 1
}

console.log(recursion_function(5))


//sum of n natural numbers 



//rest operator

function any(...a){
    console.log(a)
}

any(1,2,3,4)


//spread operator
function spread_op(a,b,c){
    console.log(a)
}
var d  = [1,2,3]
spread_op(d)


//objects: data store in key value pair

var object_name = {
    name: "abi",
    course: "MERN"
}

console.log(object_name)
console.log(object_name.name)
object_name.name = "HTML"
console.log(object_name['name'])

var array_object = [
    {
        name: "jiten",
        course: "MERN"
    },
    {
        name: "gagan",
        course: "MERN"
    }
]
console.log(array_object[0].name)

var object_array = {
    names: ["jiten","sofia"]
}

console.log(object_array.names[0])

//spread
function spreads(a,b,...c){
    console.log(a,b,c)
}

var arr = [8,9,4]

spreads(...arr)

//rest

function rests(...a){
    console.log(a)
}

rests(1,2,3,1,12,3232)

// Destructing array and objects

var [a,b,c] = arr
console.log(a,b,c)

var {name,course} = object_name
console.log(name,course)









