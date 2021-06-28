let getBlackSE = document.querySelector("#color-product-blackSEPC");
let getWhiteSE = document.querySelector("#color-product-whiteSEPC");
let getRedSE = document.querySelector("#color-product-redSEPC");
let getUrlimgSE = document.querySelector("#changeIMGse");
let getBtnSE = document.querySelector("#addToCardSE");
console.log(getUrlimgSE);
var checkSE;
getBlackSE.addEventListener("click", function() {
    if (getBlackSE.style.border != "1px solid royalblue") {
        getBlackSE.style.border = "1px solid royalblue"
        getWhiteSE.style.border = "1px solid #d2d2d7"
        getRedSE.style.border = "1px solid #d2d2d7"
    }
    getUrlimgSE.src = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-black-select-2020.png";
    checkSE = "black"
})
getWhiteSE.addEventListener("click", function() {
    if (getWhiteSE.style.border != "1px solid royalblue") {
        getWhiteSE.style.border = "1px solid royalblue"
        getBlackSE.style.border = "1px solid #d2d2d7"
        getRedSE.style.border = "1px solid #d2d2d7"
    }
    getUrlimgSE.src = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-white-select-2020.png";
    checkSE = "white"
})
getRedSE.addEventListener("click", function() {
    if (getRedSE.style.border != "1px solid royalblue") {
        getRedSE.style.border = "1px solid royalblue"
        getBlackSE.style.border = "1px solid #d2d2d7"
        getWhiteSE.style.border = "1px solid #d2d2d7"
    }
    getUrlimgSE.src = "/images/detail-img-iphone-sell/iphoneSE/iphone-se-red-select-2020.png";
    checkSE = "red"
})
let listProductSE = []
getBtnSE.addEventListener("click", function() {
    let productSE = {
        tenSanPham: 'iPhone SE',
        donGia: '400',
        color: checkSE
    }
    listProductSE.push(productSE);
    console.log(listProductSE);
})