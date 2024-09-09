console.log("hi there")

//variables in js

//#var let const
var x = 10
let y = 10
const z = 10

//#data types

//Number: 1,2,2.1
//String: 
//Boolean: true/false, 0/1
//objects
//arays
//symbols

//#operators
//Arithmetic : +, - , * , / , %
//Assignment: = , +=, -=, *=, /= , %=                x = 10;   x+=1, x = 11
//Logical:  OR ( || ), AND ( &&) , NOT( ! )
//Relational/comparison :    ===, == ,!=, !==,>,<,>=,<=               ===,==          


//# conditionals
// if else
 if(condition){
    //code
 }else{
    //code
 }

 //if else if else
 if(condtion){
    //code
 }else if(condition){
    //code
 }else{
    //code
 }

 // write a program 
 // take a number and print according to the folloeing
 // A  90-100
 // B  80-89
//  C  70-79
//  D  0-69


var a = 90;
if(a>=90 && a<=100){
    console.log("A")
}else if(a>=80 && a<=89){
    console.log("B")
}else if(a>=70 && a<=79){
    console.log("C")
}else if(a>=0 && a<=69){
    console.log("D")
}else{
    console.warn("Enter number between 0-100")
}
