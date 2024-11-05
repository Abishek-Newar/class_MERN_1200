// //objects: store data in key value pair

// var object_name = {
//     "name": "abishek",
//     "uni": "CU",
//     "branch": "CSE"
// }

// //access through key
// console.log(object_name.name)


// //change the value of any key
// object_name.uni = "MERN"
// console.log(object_name)

// //rest operator
// function any(...a){
//     console.log(a)
// }
// any(1,4,2,3,1)

// //spread operator
// function any1(a,...b){
//     console.log(a)
// }

// var ab = [1,2,3]
// any1(...ab)

// //ternary operator

// var number1 = 10%2 === 0 ? true : false
// console.log(number1)


// //DOM : Document Object Model

// var header = document.getElementById("header-element")
// console.log(header)

// //innerText: to see the inner text of the element
// console.log(header.innerText)

// //innerHTML: to seee the inenr HTML of the element
// console.log(header.innerHTML)

// //change the innter text using innerText
// header.innerText = "CSS"

// //change the style using style 
// header.style.color = "red"

// //createElement: create a new element
// var divElement = document.createElement("span")
// divElement.innerHTML = "JavaScript";

// //add new elementat the end inside the header
// header.append(divElement)

// //add new element at the starting of the header
// header.prepend(divElement)

// //add new element after the header
// header.after(divElement)

// //add new element before the header
// header.before(divElement)


// var contain =  document.getElementById("contain")
// console.log(contain.innerText)
// var a = contain.innerHTML
// contain.innerHTML = a +  "<div>HTML</div>"
// contain.style.color = "blue"
// contain.style.fontSize = "40px"

// var container = document.getElementsByClassName("container")
// console.log(container.container.innerText)


// var container1 = document.getElementsByTagName("div")
// console.log(container1[1].textContent)

// const input = document.getElementById("textElement")

// const container = document.getElementById("container")
function RandomColor() {
    const R = Math.floor(Math.random() * 255)
    const G = Math.floor(Math.random() * 255)
    const B = Math.floor(Math.random() * 255)
    const color = `rgb(${R},${G},${B})`
    return color
}
function hexCode() {
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = ""
    for (i = 0; i < 6; i++){
    const random = Math.floor(Math.random() * 16)
    color += arr[random]
    }
    console.log(color)
    return color
}
const container = document.getElementById("container")
const color = document.getElementById("color")
function showRgb(){
    container.style.backgroundColor = RandomColor()
    color.textContent = RandomColor()
}

function showHex(){
    container.style.backgroundColor = `#${hexCode()}`
    color.textContent = `#${hexCode()}`
}
