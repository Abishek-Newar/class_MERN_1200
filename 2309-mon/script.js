//set in javascript
const set_name = new Set([1,2,3,4,1,2])
//to add values to the set
set_name.add("abc")

console.log(set_name)
//to check wheather a value exists in the set or not
console.log(set_name.has("ab"))
//to delete a element in the set
set_name.delete("abc")
console.log(set_name)
//clear: to empty the set


//MAPs
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits)

//set: add elements to the map
fruits.set("kiwi",100)
console.log(fruits.entries())


//bitwise operator
//AND
//001
//101
//---
//001

//OR
//101
//010
//---
//111

//XOR
// becomes 1 if only one of them is 1
// 111
// 101
//-----
// 010

//


