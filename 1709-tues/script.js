//objects: store data in key value pair

var object_name = {
    "name": "abishek",
    "uni": "CU",
    "branch": "CSE"
}

//access through key
console.log(object_name.name)


//change the value of any key
object_name.uni = "MERN"
console.log(object_name)

//rest operator
function any(...a){
    console.log(a)
}
any(1,4,2,3,1)

//spread operator
function any1(a,...b){
    console.log(a)
}

var ab = [1,2,3]
any1(...ab)

//ternary operator

var number1 = 10%2 === 0 ? true : false
console.log(number1)


