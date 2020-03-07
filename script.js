let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let li = document.getElementsByTagName("li")


window.onload = ()=>{
    input.value = ""
    for(let i=0;i<li.length;i++){
    li[i].style.display="block"
}
    if(!window.localStorage.count===" "){
        window.localStorage.count = ""
    if(window.localStorage.count.length<1){
        window.localStorage.count = " "
        window.location.reload();
    }
    }
}

window.addEventListener("unload",()=>{
    window.localStorage.count = " "
})

const fitlerRecipe = ()=>{
    let regex = new RegExp(`^${input.value}`,"i")
    for(let i=0;i<li.length;i++){
        console.log(regex)
        console.log(li[i].classList[0].match(regex))
        if(!li[i].classList[0].match(regex)){
            li[i].style.display = "none"
        }else{
            li[i].style.display = "block"
        }
    }
}

const displayData = ()=>{
    if(!window.localStorage.recipeItems){
        window.localStorage.recipeItems=""
    }

    ul.innerHTML += `${window.localStorage.recipeItems}`
}

displayData()

const removeItem = (e)=>{
    let target = e.target
    if(target.classList.contains("fa-trash")){
        ul.removeChild(target.parentElement.parentElement.parentElement)
    }
    window.localStorage.recipeItems = ul.innerHTML
}

const addRecipe = ()=>{
    window.open("add.html","_self")
}

const editRecipe = (e)=>{
let target = e.target
if(target.classList.contains("fa-edit")){
    window.localStorage.name=`${e.target.parentElement.classList[0]}`
    window.localStorage.steps=`${e.target.parentElement.parentElement.parentElement.children[2].innerHTML}`
    window.localStorage.ingridient=`${e.target.parentElement.parentElement.parentElement.lastChild.innerHTML}`
    ul.removeChild(target.parentElement.parentElement.parentElement)
    window.localStorage.recipeItems = ul.innerHTML
    console.log(target.parentElement.parentElement.parentElement)
    window.open("edit.html","_self")
    
}
}
input.addEventListener("keyup",fitlerRecipe)
button.addEventListener("click",addRecipe)
ul.addEventListener("click",removeItem)
ul.addEventListener("click",editRecipe)