
if(localStorage.getItem("data")){
    let data = JSON.parse(localStorage.getItem("data"))
    for(let i =0;i<data.length;i++){
        const todo = document.createElement("div")
        todo.textContent = data[i]
        document.getElementById("container").append(todo)
    }
}

function add(){
    const input = document.getElementById("input").value
    const todo = document.createElement("div")
    todo.textContent = input
    document.getElementById("container").append(todo)
    if(!localStorage.getItem("data")){
        let data = [];
        data.push(input)
        localStorage.setItem("data",JSON.stringify(data))
        
    } else{
        let data = JSON.parse(localStorage.getItem("data"))
        data.push(input)
        localStorage.setItem("data",JSON.stringify(data))
    }
    document.getElementById("input").value = ""
}

function remove(){
    localStorage.removeItem("data")
    window.location.reload()
}