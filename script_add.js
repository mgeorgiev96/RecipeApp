let ul = document.querySelector("ul")
let recipe = document.querySelector(".recipe")
let textarea = document.querySelector("textarea")
let ingredient = document.querySelector(".ingredient")
let ingredients = document.querySelector(".ingredients")
let save = document.querySelector(".save")
let li = document.getElementsByTagName("li")
let fillList = ""


const saveRecipe = (e)=>{
    e.preventDefault()
    if(!window.localStorage.recipeItems){
        window.localStorage.recipeItems = ""
    }
    if(!fillList){
        fillList = "No ingridients"
    }
    if(recipe.value.length>0){
        window.localStorage.recipeItems += `<li class="${recipe.value}"><b><label class="${recipe.value}">${recipe.value}:<i class="fa fa-trash"></i><i class="fa fa-edit"></i></label></b><br>Steps: <label class="text-area">${textarea.value}</label><br><p>${fillList}</p></li>`
        window.open("index.html","_self")
    }else{
        alert("Enter a recipe name.")
    }
}

const addIngredient = (e)=>{
    e.preventDefault()
    if(ingredient.value.length>0){
    ul.innerHTML += `<li>${ingredient.value}<i class="fa fa-trash"></i></li>`
    }
    
    fillList += ` ${ingredient.value}  `
    
    ingredient.value=""
}
const removeIngredient = (e)=>{
    let target = e.target
    if(target.classList.contains("fa-trash")){
        ul.removeChild(target.parentElement)
    }
}
ul.addEventListener("click",removeIngredient)
save.addEventListener("click",saveRecipe)
ingredients.addEventListener("click",addIngredient)
