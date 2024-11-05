var arr = ['Rock',"Paper",'Scissor']

function play(){
    const random = Math.floor(Math.random()*3)
    let value = document.getElementById("options").value
    if(value === "Rock" && arr[random] === "Scissor"){
        alert(`you win, ${arr[random]}`)
    }else if(value === "Paper" && arr[random] === "Rock"){
        alert(`you win, ${arr[random]}`)
    } else if(value === "Scissor" && arr[random] === "Paper"){
        alert(`you win,${arr[random]}`)
    }else if(value === arr[random]){
        alert(`draw, ${arr[random]}`)
    }
    else{
        alert(`you lose,${arr[random]}`)
    }
}