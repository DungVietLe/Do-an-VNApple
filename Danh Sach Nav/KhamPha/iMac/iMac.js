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
let checkNameiMac;
let checkPriceiMac;
let checkColoriMac;
let checkUrliMac;
chooseIphone12pr.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/khampha/imac2.png";
    if (chooseIphone12pr.style.border = "1px solid #d2d2d7") {

        chooseIphone12pr.style.border = "1px solid royalblue"
    }
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border = "1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePricea.innerText = '1799$ USD';
    newProduct = {
        name: 'iMac 27"',
        coin: '1799$ USD',
        color: 'Graphite'
    }
    checkNameiMac = "iMac 24 inch"
    checkPriceiMac = "1299"
    checkColoriMac = "Space Gray"
    checkUrliMac = "/images/khampha/imac2.png"
})
chooseIphone12.addEventListener("click", function(e) {
    e.preventDefault()

    images.src = "/images/khampha/imac1.png"
    if (chooseIphone12.style.border = "1px solid #d2d2d7") {
        chooseIphone12.style.border = "1px solid royalblue"
    }
    if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border = "1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePricea.innerText = '1299$ USD'
    newProduct = {
        name: 'iMac 27"',
        coin: '1299$ USD',
        color: 'Graphite'
    }
    checkNameiMac = "iMac 27 inch"
    checkPriceiMac = "1799"
    checkColoriMac = "Space Gray"
    checkUrliMac = "/images/khampha/imac1.png"
})
macpropro.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/khampha/imacpro.png"
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border = "1px solid #d2d2d7") {
        macpropro.style.border = "1px solid royalblue"
    }
    changePricea.innerText = '5999$ USD'
    newProduct = {
        name: "iMac Pro",
        coin: '5999$ USD',
        color: 'Graphite'
    }
    checkNameiMac = "iMac Pro"
    checkPriceiMac = "5999"
    checkColoriMac = "Space Gray"
    checkUrliMac = "/images/khampha/imacpro.png"
})



var changePricea = document.querySelector('#changePrice-ipPC')


//theem sanr pham 


customBTN = document.querySelector('.btn-3')
let productApiiMac = "http://localhost:3000/product"
customBTN.onclick = function() {
    fetch(productApiiMac, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tensanpham: checkNameiMac,
            giasanpham: checkPriceiMac,
            color: checkColoriMac,
            url: checkUrliMac
        })
    })
    alert("add to cart Succes")
}