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