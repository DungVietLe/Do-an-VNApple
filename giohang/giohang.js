var UserNameDangnhap = document.querySelector('.UserNameDangnhap')
var url = 'https://sheetdb.io/api/v1/8eo9evgklp5lb'
var productArray = []
var hellogiohangh3 = document.querySelector('.helo-3')
var ImgSanphamgiohang = document.querySelector('.img-Sanpham-gio-hang')
var Tensanphamgiohang = document.querySelector('.Tensanpham-gio-hang')
var Giasanphamgiohang = document.querySelector('.Giasanpham-gio-hang-span')
axios.get(url).then(function(response) {
    var Dataproduct = response.data
    for (let i = 0; i < Dataproduct.length; i++) {
        productArray.push(Dataproduct[i])
        Tensanphamgiohang.innerHTML = `Name Product: ${productArray[i].tensanpham}`
        Giasanphamgiohang.innerText= productArray[i].dongia;
    }
    
});
console.log(productArray)

var user = []
var urluser = 'https://sheetdb.io/api/v1/ab8r7n5q7kzsx'
axios.get(urluser).then(function(response) {
    var Datauser = response.data
    for (let i = 0; i < Datauser.length; i++) {
        user.push(Datauser[i])
        hellogiohangh3.innerHTML = `Hello: ${user[i].username}`
        // UserNameDangnhap.innerText = `Hello: ${user[i].username}`
    }
});
console.log(user)
console.log(hellogiohangh3)





