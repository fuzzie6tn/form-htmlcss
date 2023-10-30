const bx= document.querySelector(".bx")
const pass= document.querySelector(".password")

bx.addEventListener("click" , ()=>{
    if(bx.classList.contain("visible")) {
        bx.classList.remove("visible")
        pass.type="password"
    } else{
        bx.classList.add("visible")
        pass.type="text"
    }
})