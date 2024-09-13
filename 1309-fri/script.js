var temp_string = "   this is MERn MERn class"

//charAt: to take the character at certain index in string
console.log(temp_string.charAt(5))

//[]: to take a cahracter at a ceratin inde xin a string
console.log(temp_string[5])

//toUppercase: coverts all the characters into uppercase
var str2  = temp_string.toUpperCase()
console.log(str2)

//toLowercase: coverts all the characters into lowercase
var str3 = temp_string.toLowerCase()
console.log(str3)

//trim: removes spaces from start and end of the string
var str4 = temp_string.trim()
console.log(str4)


// padStart/End: add padding at the end or start of the string
var str5 =  temp_string.padEnd(25,"x")
console.log(str5)

//repeat: to reat the string x number of times
var str6  = temp_string.repeat(3)
console.log(str6)


// replace:  repalce the first occurance of the item ... replaceAll: repalce all occureance of the item
var str7 = temp_string.replaceAll("MERn","React")
console.log(str7)


//split: to split the array
var str8 = temp_string.trim().split(" ")
console.log(str8)



