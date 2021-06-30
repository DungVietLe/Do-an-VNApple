let navProduct = document.querySelector(".header-nav-buyPC");
let titleName = document.querySelector(".title-name-productPC");
window.addEventListener("scroll", function() {
    var x = pageYOffset;
    if (x >= 12) {
        navProduct.style.visibility = "hidden";
        titleName.style.top = "0";
    } else if (x <= 12) {
        titleName.style.top = "44px";
        navProduct.style.visibility = "visible";

    }
})

let chooseIphone12 = document.querySelector(".content-detail-btn-choose-ip12PC");
let chooseIphone12pr = document.querySelector(".content-detail-btn-choose-ip12prPC");
let images = document.querySelector("#changeIMG");
let colorGraphite = document.querySelector("#color-product-GraphitePC");
let colorSliver = document.querySelector("#color-product-SliverPC");
let colorGold = document.querySelector("#color-product-GoldPC");
let colorBlue = document.querySelector("#color-product-BluePC")
let stylePrice = document.querySelector(".content-detail-title-selPC");
let animatePrice = document.getElementById("#price-animatePC")
let btnAddtoCard = document.querySelector("#addToCard");
let nameProduct = document.querySelector("#changName");
let priceProduct = document.querySelector("#changePrice-ipPC")
let changeNumberCard = document.querySelector(".count-sanpham");
let hiddenBagProduct = document.querySelector("#search-bag");
let bagProduct = document.querySelector(".container-bag");

hiddenBagProduct.addEventListener("click", function() {



    if (bagProduct.classList.contains("off") === true) {
        bagProduct.classList.remove("off")
        bagProduct.style.zIndex = "9999"
    } else {
        bagProduct.classList.add("off")
    }
})
var donGia;
var tenSP;
var check;
var checkColor;
var checkURL;
chooseIphone12pr.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-graphite-hero.png";
    if (chooseIphone12pr.style.border != "1px solid royalblue") {

        chooseIphone12pr.style.border = "1px solid royalblue"
    }
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    check = 2;
    console.log(check);
    nameProduct.innerText = "Buy iPhone 12 Pro Max";
    priceProduct.innerText = "1099 $";
    tenSP = "iPhone 12 Pro Max";
    donGia = "1099"



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
    check = 1;

    nameProduct.innerText = "Buy iPhone 12 Pro";
    priceProduct.innerText = "999 $";
    tenSP = "iPhone 12 Pro";
    donGia = "999"


})


colorGraphite.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorGraphite.style.border != "1px solid royalblue") {
        colorGraphite.style.border = "1px solid royalblue";
        colorSliver.style.border = "1px solid #d2d2d7";
        colorBlue.style.border = "1px solid #d2d2d7";
        colorGold.style.border = "1px solid #d2d2d7";
    }

    if (check === 1) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-graphite-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-graphite-hero.png";
    }
    if (check === 2) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-graphite-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-max-graphite-hero.png";
    }
    checkColor = "Graphite"


})
colorSliver.addEventListener("click", function(e) {
    e.preventDefault()

    if (colorSliver.style.border != "1px solid royalblue") {
        colorSliver.style.border = "1px solid royalblue";
        colorBlue.style.border = "1px solid #d2d2d7";
        colorGraphite.style.border = "1px solid #d2d2d7";
        colorGold.style.border = "1px solid #d2d2d7";
    }
    if (check === 1) {
        images.src = "/images/detail-img-iphone-sell/iphone12pro-sliver.png";
        checkURL = "/images/detail-img-iphone-sell/iphone12pro-sliver.png";
    }
    if (check === 2) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-silver-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-max-silver-hero.png";
    }
    checkColor = "Sliver"



})
colorGold.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorGold.style.border != "1px solid royalblue") {
        colorGold.style.border = "1px solid royalblue"
        colorSliver.style.border = "1px solid #d2d2d7";
        colorGraphite.style.border = "1px solid #d2d2d7";
        colorBlue.style.border = "1px solid #d2d2d7";
    }

    if (check === 1) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-gold-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-gold-hero.png";
    }
    if (check === 2) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-gold-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-max-gold-hero.png";
    }
    checkColor = "Gold";

})
colorBlue.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorBlue.style.border != "1px solid royalblue") {
        colorBlue.style.border = "1px solid royalblue";
        colorGold.style.border = "1px solid #d2d2d7";
        colorSliver.style.border = "1px solid #d2d2d7";
        colorGraphite.style.border = "1px solid #d2d2d7";
    }

    if (check === 1) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-blue-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-blue-hero.png";
    }
    if (check === 2) {
        images.src = "/images/detail-img-iphone-sell/iphone-12-pro-max-blue-hero.png";
        checkURL = "/images/detail-img-iphone-sell/iphone-12-pro-max-blue-hero.png";
    }
    checkColor = "Blue"

})


btnAddtoCard.addEventListener("click", function() {
    let listProduct = []
    let productiPhone12 = {
        tenSanPham: tenSP,
        giaSanPham: donGia,
        color: checkColor,
        url: checkURL

    }
    listProduct.push(productiPhone12)
    for (let i = 0; i < listProduct.length; i++) {
        if (changeNumberCard.classList.contains("off") === true) {
            changeNumberCard.classList.remove("off")
        }
        changeNumberCard.innerText = listProduct.length;
    }
    alert("add to card is succes")
    fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tensanpham: tenSP,
            giasanpham: donGia,
            color: checkColor,
            url: checkURL
        })
    })

})
fetch("http://localhost:3000/product")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })