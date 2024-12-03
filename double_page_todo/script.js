function submit(){
    console.log("hello")
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    if(!localStorage.getItem("data")){
        let data = []
        data.push({
            title: title,
            description:description
        })
        console.log(data)
        localStorage.setItem("data",JSON.stringify(data))
        alert("todo added")
    }else{
        let data = JSON.parse(localStorage.getItem("data"));
        console.log(data)
        data.push({
            title: title,
            description:description
        })
        localStorage.setItem("data",JSON.stringify(data))
        alert("todo added")
    }

}

if(localStorage.getItem("data")){
    let data = JSON.parse(localStorage.getItem("data"))
    for(let i = 0;i<data.length;i++) {
        const box = document.createElement("box")
        box.classList.add("box1")
        const title = document.createElement("h1")
        const description = document.createElement("p")
        title.textContent = data[i].title
        description.textContent = data[i].description
        const button = document.createElement("button")
        button.textContent = "Remove"
        button.addEventListener("click",()=>{remove(i)})
        box.append(title)
        box.append(description)
        box.append(button)
        document.getElementById("container1").append(box)
    };
}

function remove(id){
    const data = JSON.parse(localStorage.getItem("data"))
    const datas = data.filter((item,index)=> index!=id)
    localStorage.setItem("data",JSON.stringify(datas))
    window.location.reload()
}
function removeall(){
    localStorage.removeItem("data")
    window.location.reload()
}