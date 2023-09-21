const inputBox= document.getElementById("input-box")
const list= document.getElementById("list")


const addTask=()=>{
    if(inputBox.value ===""){
        alert("you must write something")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML= `<i class="fa-regular fa-circle-xmark"></i>`
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

list.addEventListener("click",(e)=>{
   
if(e.target.tagName==="LI"){
e.target.classList.toggle("checked");
saveData()
}
else if (e.target.tagName ==="SPAN") {
    e.target.parentElement.remove()
    saveData()
} 
else if (e.target.tagName ==="I") {
    e.target.parentElement.parentElement.remove()
} 

})

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showList(){
list.innerHTML = localStorage.getItem("data")
}
 showList()