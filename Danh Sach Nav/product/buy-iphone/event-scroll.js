let nav = document.querySelector(".header-nav-buyPC");
let changeName = document.querySelector(".title-name-productPC");
window.addEventListener("scroll", function() {
    var x = pageYOffset;
    if (x >= 12) {
        // nav.style.display = "none";
        changeName.style.top = "0";
    } else if (x <= 12) {
        changeName.style.top = "44px";
    }
})

let chooseIphone12 = document.querySelector(".content-detail-btn-choose-ip12PC");
let chooseIphone12pr = document.querySelector(".content-detail-btn-choose-ip12prPC");
let images = document.querySelector("#changeIMG");
let colorGraphite = document.querySelector("#color-product-GraphitePC");
let colorSliver = document.querySelector("#color-product-SliverPC");
let colorGold = document.querySelector("#color-product-GoldPC");
let colorBlue = document.querySelector("#color-product-BluePC")


chooseIphone12pr.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-graphite-hero.png";
    if (chooseIphone12pr.style.border != "1px solid royalblue") {

        chooseIphone12pr.style.border = "1px solid royalblue"
    }
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
})
chooseIphone12.addEventListener("click", function(e) {
    e.preventDefault()

    images.src = "/images/detail-img-iphone-sell/iphone-12-pro-graphite-hero.png"
    if (chooseIphone12.style.border != "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid royalblue"
    }
    if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
    }
})

colorGraphite.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorGraphite.style.border != "1px solid royalblue") {
        colorGraphite.style.border = "1px solid royalblue";
        colorSliver.style.border = "1px solid #d2d2d7";
        colorBlue.style.border = "1px solid #d2d2d7";
        colorGold.style.border = "1px solid #d2d2d7";
    }
    if (images.src != "") {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-graphite-hero.png";
    }

})
colorSliver.addEventListener("click", function(e) {
    e.preventDefault()

    if (colorSliver.style.border != "1px solid royalblue") {
        colorSliver.style.border = "1px solid royalblue";
        colorBlue.style.border = "1px solid #d2d2d7";
        colorGraphite.style.border = "1px solid #d2d2d7";
        colorGold.style.border = "1px solid #d2d2d7";
    }
    if (images.src != "") {
        images.src = "/images/detail-img-iphone-sell/iphone12pro-sliver.png";
    }


})
colorGold.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorGold.style.border != "1px solid royalblue") {
        colorGold.style.border = "1px solid royalblue"
        colorSliver.style.border = "1px solid #d2d2d7";
        colorGraphite.style.border = "1px solid #d2d2d7";
        colorBlue.style.border = "1px solid #d2d2d7";
    }
    if (images.src != "") {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-gold-hero.png";
    }
    // if (images.src = "http://127.0.0.1:5500/images/detail-img-iphone-sell/iphone-12-pro-max-graphite-hero.png") {
    //     console.log(images.src);
    //     images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-silver-hero.png";

    // }
})
colorBlue.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorBlue.style.border != "1px solid royalblue") {
        colorBlue.style.border = "1px solid royalblue";
        colorGold.style.border = "1px solid #d2d2d7";
        colorSliver.style.border = "1px solid #d2d2d7";
        colorGraphite.style.border = "1px solid #d2d2d7";
    }
    if (images.src != "") {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-blue-hero.png";
    }
})