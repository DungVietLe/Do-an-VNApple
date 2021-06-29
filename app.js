var accountCheck = document.querySelector('#account-check')
let search = document.getElementById("search-nav");
let nav = document.querySelector(".nav");
let elNav = document.querySelectorAll(".nav-product")
Array.from(elNav)
let close = document.getElementById("close");
let modal_search = document.querySelector(".modal-nav")
let searchBox = document.querySelector(".search-box");
let messBox = document.querySelector(".mess-box");
let containerBody = document.querySelector(".wrapper-body-container");
let styleIcon = document.querySelector(".icon-bars-mobile");
let iconStyleHead = document.querySelector(".line-bars-head");
let iconStyleEnd = document.querySelector(".line-bars-end");
let listNavMobile = document.querySelector(".list-nav-mobile");
let iconBag = document.querySelector(".icon-bags-mb");


close.addEventListener("click", function(e) {
    e.preventDefault()
    for (let i = 0; i < elNav.length; i++) {
        if (elNav[i].classList.contains("animate__animated", "animate__fadeOutLeft")) {
            elNav[i].classList.remove("animate__animated", "animate__fadeOutLeft");
            elNav[i].classList.add("animate__animated", "animate__fadeInLeft")
        }
    }
    if (messBox.classList.contains("animate__animated", "animate__fadeInRight")) {
        messBox.classList.remove("animate__animated", "animate__fadeInRight");
        // messBox.classList.add("animate__animated", "animate__fadeOutRight")
        messBox.classList.add("off")
    }
    if (searchBox.classList.contains("animate__animated", "animate__fadeInRight")) {
        searchBox.classList.remove("animate__animated", "animate__fadeInRight");
        // searchBox.classList.add("animate__animated", "animate__fadeOutRight");
        searchBox.classList.add("off");
    }
    if (modal_search.classList.contains("on")) {
        modal_search.classList.remove("on")
    }
})

search.addEventListener("click", function(e) {
    e.preventDefault()
    for (let i = 0; i < elNav.length; i++) {
        elNav[i].classList.add("animate__animated", "animate__fadeOutLeft");
    }
    if (searchBox.classList.contains("off")) {
        searchBox.classList.remove("off");
        searchBox.classList.add("animate__animated", "animate__fadeInRight");
    }
    if (messBox.classList.contains("off")) {
        messBox.classList.remove("off");
        messBox.classList.add("animate__animated", "animate__fadeInRight");
    }
    modal_search.classList.add("on")
})
styleIcon.addEventListener("click", function(e) {
        e.preventDefault()
        if (iconStyleHead.classList.contains("rotate") === false) {
            iconStyleHead.classList.add("rotate");
        } else {
            iconStyleHead.classList.remove("rotate");
            iconStyleHead.classList.add("off-rotate");
        }

        if (iconStyleEnd.classList.contains("rotate2") === false) {
            iconStyleEnd.classList.add("rotate2");
        } else {
            iconStyleEnd.classList.remove("rotate2");
            iconStyleEnd.classList.add("off-rotate2");
        }
        if (listNavMobile.classList.contains("off") === true) {
            listNavMobile.classList.remove("off");
            listNavMobile.classList.add("animate__animated", "animate__slideInDown")
        } else if (listNavMobile.classList.contains("animate__slideInDown") === true) {
            listNavMobile.classList.remove("animate__slideInDown");
            listNavMobile.classList.add("off");

        }


        if (iconBag.classList.contains("off") === false) {
            iconBag.classList.add("off");
        } else {
            iconBag.classList.remove("off");
        }





    })
    // search.addEventListener("click", function(e) {
    //     e.preventDefault()

//     for (let i = 0; i < elNav.length; i++) {

//         elNav[i].classList.add("hidden")
//         if (elNav[i].classList.contains("animate__animated", "animate__backInLeft")) {
//             elNav[i].classList.remove("animate__animated", "animate__backInLeft")
//         }
//     }
//     searchBox.classList.remove("off")
//     searchBox.classList.add("animate__animated", "animate__fadeInRight")
//     if (messBox.classList.contains("off")) {
//         messBox.classList.remove("off")
//         messBox.classList.add("block")
//         messBox.classList.add("animate__animated", "animate__fadeInBottomRight");
//     }
//     containerBody.classList.add("modal")

// })


// close.addEventListener("click", function(e) {
//     e.preventDefault()
//     searchBox.classList.add("off")
//     nav.classList.remove("none")
//     for (let i = 0; i < elNav.length; i++) {
//         if (elNav[i].classList.contains("hidden")) {
//             elNav[i].classList.remove("hidden")
//             elNav[i].classList.add("animate__animated", "animate__backInLeft")
//         }
//     }
//     if (messBox.classList.contains("block")) {
//         messBox.classList.remove("block");
//         messBox.classList.add("off")
//     }
//     messBox.classList.remove("animate__animated", "animate__fadeInBottomRight")
//     containerBody.classList.remove("modal")

// })


//Ẩn/hiện shopping bag
let hiddenBag = document.querySelector("#search-bag")
let bag = document.querySelector(".container-bag");
hiddenBag.addEventListener("click", function(e) {
    e.preventDefault();

    if (bag.style.display === "block") {
        bag.style.display = "none"
    } else {
        bag.style.display = "block"
    }
})