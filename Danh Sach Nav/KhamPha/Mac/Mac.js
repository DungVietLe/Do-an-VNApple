// let nav = document.querySelector(".header-nav-buyPC");
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
let macpropro = document.querySelector('.macpropro')
let urldaylensanpam = 'https://sheetdb.io/api/v1/8eo9evgklp5lb';
let checkColor;
let checkUrlMac;
let checkName;
let checkPrice;
chooseIphone12pr.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/khampha/macbook13pro.png";
    if (chooseIphone12pr.style.border = "1px solid #d2d2d7") {

        chooseIphone12pr.style.border = "1px solid royalblue"
    }
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border = "1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePrice.innerText = '1299$ USD'
    if (Color) {
        newProduct = {
            tensanpham: "Mac Book Air",
            giasanpham: '999$ USD',
            color: 'Graphite',
            url: "/images/khampha/macbook13pro.png"
        }
    } else {
        newProduct = {
            tensanpham: "Mac Book Air",
            giasanpham: '999$ USD',
            color: 'Sliver',
            url: "/images/khampha/macbook13pro.png"
        }
    }
    checkName = "Macbook Pro 13";
    checkPrice = "1299";
    checkUrlMac = "/images/khampha/macbook13pro.png";

})
chooseIphone12.addEventListener("click", function(e) {
    e.preventDefault()

    images.src = "/images/khampha/macbook13pro.png"
    if (chooseIphone12.style.border = "1px solid #d2d2d7") {
        chooseIphone12.style.border = "1px solid royalblue"
    }
    if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border = "1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePrice.innerText = '999$ USD'
    if (Color) {
        newProduct = {
            tensanpham: "Mac Pro 13 ",
            giasanpham: '1299$ USD',
            color: 'Graphite',
            url: "/images/khampha/macbook13pro.png"
        }
    } else {
        newProduct = {
            tensanpham: "Mac Pro 13",
            giasanpham: '1299$ USD',
            color: 'Sliver',
            url: "/images/khampha/macbook13pro.png"

        }
    }
    checkName = "Macbook Air";
    checkPrice = "999";
    checkUrlMac = "/images/khampha/macbook13pro.png";

})
macpropro.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/khampha/macbook13-1.png"
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border = "1px solid #d2d2d7") {
        macpropro.style.border = "1px solid royalblue"
    }
    changePrice.innerText = '2999$ USD'
    if (Color) {
        newProduct = {
            tensanpham: "Mac Book 16 Pro",
            giasanpham: '2999$ USD',
            color: 'Graphite',
            url: "/images/khampha/macbook13-1.png"
        }
    } else {
        newProduct = {
            tensanpham: "Mac Book 16 Pro",
            giasanpham: '2999$ USD',
            color: 'Sliver',
            url: "/images/khampha/macbook13-1.png"

        }
    }
    checkName = "Macbook Pro 16";
    checkPrice = "2999";
    checkUrlMac = "/images/khampha/macbook13-1.png"

})

colorGraphite.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorGraphite.style.border != "1px solid royalblue") {
        colorGraphite.style.border = "1px solid royalblue";
        colorSliver.style.border = "1px solid #d2d2d7";
    }
    if (images.src != "") {
        images.src = "/Danh Sach Nav/KhamPha/Mac/imgMac/space-select.jfif";
    }
    Color = true;
    checkColor = "Space Gray"
})
colorSliver.addEventListener("click", function(e) {
    e.preventDefault()
    if (colorSliver.style.border != "1px solid royalblue") {
        colorSliver.style.border = "1px solid royalblue";
        colorGraphite.style.border = "1px solid #d2d2d7";
    }
    if (images.src != "") {
        images.src = "/Danh Sach Nav/KhamPha/Mac/imgMac/mac1-sliver.jfif";
    }
    Color = false;
    checkColor = "Sliver"
})

var changePrice = document.querySelector('#changePrice-ipPC')



//theem sanr pham 


var Color = true;
customBTN = document.querySelector('.btn-3')
let productApiMac = "http://localhost:3000/product";
customBTN.onclick = function() {
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border = "1px solid #d2d2d7"
        colorGraphite.style.border = "1px solid #d2d2d7"
        colorSliver.style.border = "1px solid #d2d2d7";

    } else if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border = "1px solid #d2d2d7"
        colorGraphite.style.border = "1px solid #d2d2d7"
        colorSliver.style.border = "1px solid #d2d2d7";

    } else {
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border = "1px solid #d2d2d7"
        colorGraphite.style.border = "1px solid #d2d2d7"
        colorSliver.style.border = "1px solid #d2d2d7";

    }

    fetch(productApiMac, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tensanpham: checkName,
            giasanpham: checkPrice,
            color: checkColor,
            url: checkUrlMac
        })

    })

}