//events

//eventlistener
var container = document.getElementById("container")
var text = document.getElementById("text")
var button = document.getElementById("button")
function randomNumber(){
    let random = Math.floor(Math.random()*100)
    text.innerText = random
}
//adding event listner for the 
container.addEventListener("mousemove",randomNumber);

function removeFunction(){
    container.removeEventListener("mousemove",randomNumber)
}