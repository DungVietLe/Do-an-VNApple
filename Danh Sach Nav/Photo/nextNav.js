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
        
    }
    dot2.style.opacity ="1";
    dot1.style.opacity ="0.5";
    image.removeAttribute("class");
    image.classList.add("img");
})
dot1.addEventListener("click",function(){
    if(dot.style.display="block"){
        dot.style.display="none";
    }
    if(changeDot.style.display="none"){
        changeDot.style.display="block"
    }
    dot1.style.opacity ="1";
    dot2.style.opacity ="0.5";
    image.removeAttribute("class");
    image.classList.add("img");
})

let image =document.querySelector(".imgTrue1");
// image.addEventListener("hover",function(e){

//     e.preventDefault();
//     image.classList.remove("animate__animated");
//     image.classList.remove("animate__pulse");
//     image.classList.add("animate__animated");
//     image.classList.add("animate__pulse");
// }   
// )
function test(){
    
   
    if(image.classList.contains("animate__animated animate__pulse img")){
        // image.classList.remove("animate__animated");
    // image.classList.remove("animate__pulse");
    image.removeAttribute("class");
    image.classList.add("img");
    image.classList.add("animate__animated");
    image.classList.add("animate__pulse");
    }else{
        image.removeAttribute("class");
    image.classList.add("img");
        image.classList.add("animate__animated");
    image.classList.add("animate__pulse");
    
    }
    
}   
let image2 = document.querySelector(".imgTrue")
function test2(){
    
   
    if(image2.classList.contains("animate__animated animate__pulse img")){
        // image.classList.remove("animate__animated");
    // image.classList.remove("animate__pulse");
    image2.removeAttribute("class");
    image2.classList.add("img");
    image2.classList.add("animate__animated");
    image2.classList.add("animate__pulse");
    }else{
        image2.removeAttribute("class");
    image2.classList.add("img");
        image2.classList.add("animate__animated");
    image2.classList.add("animate__pulse");
    
    }
    
}   

// if( let newImage === image){


// }