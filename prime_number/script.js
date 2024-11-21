function check(){
    const input = document.getElementById("input").value
    let flag = 1;
    for(let i=2;i<input;i++){
        if(input%i === 0){
            document.getElementById("main").style.backgroundColor = "red"
            document.getElementById("ans").textContent = "COMPOSITE"
            flag = 0;
        }
    }
    if(flag){
        document.getElementById("main").style.backgroundColor = "green"
        document.getElementById("ans").textContent = "PRIME"
    }
}