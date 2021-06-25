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
let macpropro = document.querySelector('.macpropro')

chooseIphone12pr.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/khampha/imac2.png" ;
    if (chooseIphone12pr.style.border = "1px solid #d2d2d7") {

        chooseIphone12pr.style.border = "1px solid royalblue"
    }
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border ="1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePricea.innerText = '1799$ USD';
    newProduct = {
       name: 'iMac 27"',
       coin: '1799$ USD',
       color: 'Graphite'
    }
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
    if (macpropro.style.border ="1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePricea.innerText = '1299$ USD'
        newProduct = {
        name: 'iMac 27"',
        coin: '1299$ USD',
        color: 'Graphite'
        }
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
})

// colorGraphite.addEventListener("click", function(e) {
//     e.preventDefault()
//     if (colorGraphite.style.border != "1px solid royalblue") {
//         colorGraphite.style.border = "1px solid royalblue";
//         colorSliver.style.border = "1px solid #d2d2d7";
//     }
//     if (images.src != "") {
//         images.src = "/Danh Sach Nav/KhamPha/Mac/imgMac/space-select.jfif";
//     }
//     Color = true;
// })
// colorSliver.addEventListener("click", function(e) {
//     e.preventDefault()
//     if (colorSliver.style.border != "1px solid royalblue") {
//         colorSliver.style.border = "1px solid royalblue";
//         colorGraphite.style.border = "1px solid #d2d2d7";
//     }
//     if (images.src != "") {
//         images.src = "/Danh Sach Nav/KhamPha/Mac/imgMac/mac1-sliver.jfif";
//     }
//     Color = false;
// })

var changePricea = document.querySelector('#changePrice-ipPC')


//theem sanr pham 

var productArray = [
]
var newProduct = {
}
var Color = true;
customBTN = document.querySelector('.btn-3')

customBTN.onclick = function(){
    if(chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border ="1px solid #d2d2d7"
        productArray.push(newProduct)
    }
    else if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border = "1px solid #d2d2d7"
        productArray.push(newProduct)
    }
    else{
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border ="1px solid #d2d2d7"
        productArray.push(newProduct)
    }
    confirm("Thank you buy Apple")
    console.log(productArray)
}

