let create = document.querySelector("#create")
let popup = document.querySelector("#popup")
let bbtn = document.querySelector("#bbtn")



create.addEventListener("click", () =>{
    popup.classList.remove("d-none")
})

bbtn.addEventListener("click", () =>{
    popup.classList.add("d-none")

})