let dot1=document.querySelector("#btn-dot1");
let dot2=document.querySelector("#btn-dot2");
let dot3=document.querySelector("#btn-dot3");
let changeDot = document.querySelector("#img3")
let dot = document.querySelector("#img1")
let changeDot2 = document.querySelector("#img4")
let layout1 = document.querySelector('#img1')
let layout2 = document.querySelector('#img3')
let layout3 = document.querySelector('#img4')
dot2.addEventListener("click",function(){
    if(dot.style.display="block"){
        dot.style.display="none";}
    if(changeDot2.style.display="block"){
        changeDot2.style.display="none";

    }
    if(changeDot.style.display="none"){
        changeDot.style.display="block";
    }
    dot2.style.opacity ="1";
    dot1.style.opacity ="0.3";
    dot3.style.opacity ="0.3";
    layout2.classList.add('animate__fadeIn')
    layout1.classList.remove('animate__fadeIn')
    layout3.classList.remove('animate__fadeIn')
    // image.removeAttribute("class");
    // image.classList.add("img");
})
dot3.addEventListener("click",function(){
    if(changeDot.style.display="block"){
        changeDot.style.display="none";
    }
    if(dot.style.display="block"){
        dot.style.display="none";
    }
    if(changeDot2.style.display="none"){
        changeDot2.style.display="block";    
    }
    dot3.style.opacity ="1";
    dot1.style.opacity ="0.3";
    dot2.style.opacity ="0.3";
    layout3.classList.add('animate__fadeIn')
    layout1.classList.remove('animate__fadeIn')
    layout2.classList.remove('animate__fadeIn')
    image.classList.add("img");
})
dot1.addEventListener("click",function(){
    if(changeDot.style.display="block"){
        changeDot.style.display="none";
    }
    if(changeDot2.style.display="block"){
        changeDot2.style.display="none";
    }
    if(dot.style.display="none"){
        dot.style.display="block"
    }
    dot1.style.opacity ="1";
    dot2.style.opacity ="0.3";
    dot3.style.opacity ="0.3";
    layout1.classList.add('animate__fadeIn')
    layout2.classList.remove('animate__fadeIn')
    layout3.classList.remove('animate__fadeIn')
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