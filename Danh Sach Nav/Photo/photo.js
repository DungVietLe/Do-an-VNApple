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

// mobile
let changeNameMobile = document.querySelector(".nav-photo-mobile");
window.addEventListener("scroll", function() {
    let x = pageYOffset;
    if (x >= 12) {
        // nav.style.display = "none";
        changeNameMobile.style.top = "0";
    } else if (x <= 12) {
        // nav.style.display = "flex";
        changeNameMobile.style.top = "44px";
    }
})