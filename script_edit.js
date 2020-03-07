let input= document.querySelector("input")
let steps= document.querySelector(".steps")
let ingridient= document.querySelector(".ingridient")
let button = document.querySelector("button")


if(!window.localStorage.name){
    input.value = ""
}else if(window.localStorage.name){
    input.value = window.localStorage.name
}
if(!window.localStorage.steps){
    steps.innerHTML = ""
}else{
    steps.innerHTML = window.localStorage.steps
}
if(!window.localStorage.ingridient){
    ingridient.innerHTML = ""
}else{
    ingridient.innerHTML = window.localStorage.ingridient
}

const saveChanges = (e)=>{
    e.preventDefault()
        window.open("index.html","_self")
}

window.addEventListener("unload",()=>{
    
    window.localStorage.name = input.value
    window.localStorage.steps = steps.value
    window.localStorage.ingridient = ingridient.value
    
    if(!window.localStorage.ingridient){
        ingridient.value = "No ingridients"
    }
        window.localStorage.recipeItems += `<li class="${input.value}"><b><label class="${input.value}">${input.value}:<i class="fa fa-trash"></i><i class="fa fa-edit"></i></label></b><br>Steps: <label class="text-area">${steps.value}</label><br><p>${ingridient.value}</p></li>`
        
})
 


button.addEventListener("click",saveChanges)






