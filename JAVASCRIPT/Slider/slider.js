let button= document.querySelector("button")
slider = document.querySelector("div>div")

console.log(slider);

button.addEventListener("click",()=>{
    console.log(slider.className.trim());
    
    if(slider.className.trim()==""){
        slider.className="transform"
        button.textContent="open"
    } 
    else {
        slider.className=""
        button.textContent = "close"
    }
})