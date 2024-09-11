//identifiers
//keywords


var first_number = 10;

//first letter alphabet or _
// except _ , no other symbols
// a-z, A-Z, 0-9 , _
// keywords cannot be used as a identifiers
// keywords are some reserved words in js


//Arrays in js
var first_array = [10,"HTML","CSS",true];
console.log(first_array[0])

//push: add value at end
first_array.push(765)
console.log(first_array)
//pop: remove value from end
first_array.pop()
first_array.pop()
console.log(first_array)

//shift: removes the first element 
first_array.shift()
console.log(first_array)

//unshift: add element in front
first_array.unshift("JS")
console.log(first_array)
//length: find the length of the array
console.log(first_array.length)
// slice: take a part of array
var sliced_array = first_array.slice(1,3);
console.log(sliced_array)

//splice: add array at any index
first_array.splice(1,3,45,"React","MERn");
console.log(first_array)

//add element between the array
var first_part = first_array.slice(0,1)
var second_part = first_array.slice(1,)
var add_array = [445]
var first_concat = first_part.concat(add_array);
var final_array = first_concat.concat(second_part)
console.log(final_array)




//string in js
var first_string = "HTML$CSS#JS";
console.log(first_string)

//functions in js: block of code that performs specific tasks

function func_name(first_param,second_param){
    console.log(first_param + second_param)
}
func_name(10,12)


var arrow_function = ()=>{
    console.log("heelo there from arrow fucntion")
}
arrow_function();

