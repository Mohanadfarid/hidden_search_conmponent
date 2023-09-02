const btn = document.querySelector(".btn")
const search_container = document.querySelector(".search_container")
const search_bar= document.querySelector(".search_bar")

btn.addEventListener("click",()=>{
    search_container.classList.toggle('active')
    search_bar.focus()
})