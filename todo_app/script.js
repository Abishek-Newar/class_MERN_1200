var input = document.getElementById("text")
var todo = document.getElementById("todo")

function addTodo(){
    console.log("hello")
    const divElement = document.createElement("div")
    divElement.style.color = "green"
    divElement.style.border = "1px solid #000"
    const text = input.value;
    divElement.innerText = text.toUpperCase();
    input.value = "";
    todo.append(divElement)
}