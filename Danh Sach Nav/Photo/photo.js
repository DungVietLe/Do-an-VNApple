let nav = document.querySelector(".header-nav");
let changeName = document.querySelector(".nav-photo-PC");
window.addEventListener("scroll", function() {
    let x = pageYOffset;
    if (x >= 12) {
        // nav.style.display = "none";
        changeName.style.top = "0";
    } else if (x <= 12) {
        // nav.style.display = "flex";
        changeName.style.top = "44px";
    }
})


