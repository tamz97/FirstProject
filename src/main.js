const button = document.getElementById("menu");
const nav = document.getElementById("navbar")

button.addEventListener('click',()=>{
    nav.classList.toggle("show")
    
} )


const navButtons = document.querySelector("ul li a")
navButtons.addEventListener('click', ()=>{
    nav.classList.toggle("show")
   

})

const navButtons2 = document.querySelector(".menu2")
navButtons2.addEventListener('click', ()=>{
    nav.classList.toggle("show")
    

})

const navButtons3 = document.querySelector(".menu3")
navButtons3.addEventListener('click', ()=>{
    nav.classList.toggle("show")
    

})

const navButtons4 = document.querySelector(".menu4")
navButtons4.addEventListener('click', ()=>{
    nav.classList.toggle("show")
    

})

const navButtons5 = document.querySelector(".menu5")
navButtons5.addEventListener('click', ()=>{
    nav.classList.toggle("show")
    

})
const body = document.querySelector("body")
const home = document.getElementById("home")
const mode = document.querySelector(".toggle")
mode.addEventListener('click', ()=>{
    body.classList.toggle("active")
    home.classList.toggle("active2")
})