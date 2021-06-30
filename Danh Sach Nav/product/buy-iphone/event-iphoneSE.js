let getBlackSE = document.querySelector("#color-product-blackSEPC");
let getWhiteSE = document.querySelector("#color-product-whiteSEPC");
let getRedSE = document.querySelector("#color-product-redSEPC");
let getUrlimgSE = document.querySelector("#changeIMGse");
let getBtnSE = document.querySelector("#addToCardSE");
let changeNumberCardSE = document.querySelector(".count-sanpham");
var checkSE;
var checkUrlSE;
getBlackSE.addEventListener("click", function() {
    if (getBlackSE.style.border != "1px solid royalblue") {
        getBlackSE.style.border = "1px solid royalblue"
        getWhiteSE.style.border = "1px solid #d2d2d7"
        getRedSE.style.border = "1px solid #d2d2d7"
    }
    getUrlimgSE.src = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-black-select-2020.png";
    checkSE = "black"
    checkUrlSE = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-black-select-2020.png";
})
getWhiteSE.addEventListener("click", function() {
    if (getWhiteSE.style.border != "1px solid royalblue") {
        getWhiteSE.style.border = "1px solid royalblue"
        getBlackSE.style.border = "1px solid #d2d2d7"
        getRedSE.style.border = "1px solid #d2d2d7"
    }
    getUrlimgSE.src = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-white-select-2020.png";
    checkSE = "white";
    checkUrlSE = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-white-select-2020.png";
})
getRedSE.addEventListener("click", function() {
    if (getRedSE.style.border != "1px solid royalblue") {
        getRedSE.style.border = "1px solid royalblue"
        getBlackSE.style.border = "1px solid #d2d2d7"
        getWhiteSE.style.border = "1px solid #d2d2d7"
    }
    getUrlimgSE.src = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-red-select-2020.png";
    checkSE = "red";
    checkUrlSE = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-red-select-2020.png";
})
let listProductSE = []
let linkApi = "http://localhost:3000/product";
getBtnSE.addEventListener("click", function() {
    let productSE = {
        tenSanPham: 'iPhone SE',
        donGia: '400',
        color: checkSE
    }
    listProductSE.push(productSE);
    for (let i = 0; i < listProductSE.length; i++) {
        if (changeNumberCardSE.classList.contains("off") === true) {
            changeNumberCardSE.classList.remove("off")
        }
        changeNumberCardSE.innerText = listProductSE.length;
    }
    alert("add to card is succes");
    console.log(listProductSE);
    fetch(linkApi, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tensanpham: "iPhone SE",
            giasanpham: "400",
            color: checkSE,
            url: checkUrlSE

        })
    })
})