let dot1=document.querySelector("#btn-dot1");
let dot2=document.querySelector("#btn-dot2");
let dot = document.querySelector("#img3")
let changeDot = document.querySelector("#img1")
dot2.addEventListener("click",function(){
    if(changeDot.style.display="block"){
        changeDot.style.display="none";
    }
    if(dot.style.display="none"){
        dot.style.display="block";
        dot.style.border ="solid black"
    }
    
})
dot1.addEventListener("click",function(){
    if(dot.style.display="block"){
        dot.style.display="none";
    }
    if(changeDot.style.display="none"){
        changeDot.style.display="block"
    }
})