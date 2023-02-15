
const p = document.querySelector("p")
const pcss = window.getComputedStyle(p)
const button = document.querySelector("button")

// p.style.display = "none"
button.addEventListener("click",function(){
    if (pcss.display == "block"){
        p.style.display = "none"
    }   else{
        p.style.display = "block"
    }
} )