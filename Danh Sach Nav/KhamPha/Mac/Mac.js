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
let url = 'https://sheetdb.io/api/v1/8eo9evgklp5lb';
chooseIphone12pr.addEventListener("click", function(e) {
    e.preventDefault()
    images.src = "/images/khampha/macbook13pro.png";
    if (chooseIphone12pr.style.border = "1px solid #d2d2d7") {

        chooseIphone12pr.style.border = "1px solid royalblue"
    }
    if (chooseIphone12.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
    }
    if (macpropro.style.border ="1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePrice.innerText = '1299$ USD'
    if(Color){
        newProduct = {
       name: "Mac Book Air",
       coin: '999$ USD',
       color: 'Graphite'
       }
   }
   else{
       newProduct = {
       name: "Mac Book Air",
       coin: '999$ USD',
       color: 'Sliver'
       }
   }
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
    if (macpropro.style.border ="1px solid royalblue") {
        macpropro.style.border = "1px solid #d2d2d7"
    }
    changePrice.innerText = '999$ USD'
    if(Color){
         newProduct = {
        name: "Mac Pro 13 ",
        coin: '1299$ USD',
        color: 'Graphite'
        }
    }
    else{
        newProduct = {
        name: "Mac Pro 13",
        coin: '1299$ USD',
        color: 'Sliver'
        }
    }
   
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
    if(Color){
        newProduct = {
       name: "Mac Book 16 Pro",
       coin: '2999$ USD',
       color: 'Graphite'
       }
   }
   else{
       newProduct = {
        name: "Mac Book 16 Pro",
        coin: '2999$ USD',
       color: 'Sliver'
       }
   }
    
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
})

var changePrice = document.querySelector('#changePrice-ipPC')
console.log(changePrice.innerText)


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
        colorGraphite.style.border = "1px solid #d2d2d7"
        colorSliver.style.border = "1px solid #d2d2d7";
        productArray.push(newProduct)
    }
    else if (chooseIphone12pr.style.border = "1px solid royalblue") {
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border = "1px solid #d2d2d7"
        colorGraphite.style.border = "1px solid #d2d2d7"
        colorSliver.style.border = "1px solid #d2d2d7";
        productArray.push(newProduct)
    }
    else{
        chooseIphone12.style.border = "1px solid #d2d2d7"
        chooseIphone12pr.style.border = "1px solid #d2d2d7"
        macpropro.style.border ="1px solid #d2d2d7"
        colorGraphite.style.border = "1px solid #d2d2d7"
        colorSliver.style.border = "1px solid #d2d2d7";
        productArray.push(newProduct)
    }
    console.log(productArray)
    for(let i = 0 ; i<productArray.length; i++){
         axios.post(url, { tensanpham: productArray[i].name , dongia:productArray[i].coin , mau:productArray[i].color }).then((response) => console.log(response));
    }
    confirm("Registered Successfully");
}

