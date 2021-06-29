var UserNameDangnhap = document.querySelector('.UserNameDangnhap')
var urlsanpham = 'https://sheetdb.io/api/v1/8eo9evgklp5lb'
var productArray = []
var hellogiohangh3 = document.querySelector('.helo-3')
var ImgSanphamgiohang = document.querySelector('.img-Sanpham-gio-hang')
var Tensanphamgiohang = document.querySelector('.Tensanpham-gio-hang')
var Giasanphamgiohang = document.querySelector('.Giasanpham-gio-hang-span');
var gioHangCha = document.querySelector(".Giohang")
axios.get(urlsanpham).then(function(response) {
    var Dataproduct = response.data
    for (let i = 0; i < Dataproduct.length; i++) {
        productArray.push(Dataproduct[i])

        console.log("hihi");



        // // setTimeout(function(){
        //     Tensanphamgiohang.innerHTML = `Name Product: ${productArray[i].tensanpham}`
        //     Giasanphamgiohang.innerText= productArray[i].dongia;
        // // },0)
    }

});
// var user = []
// console.log(productArray)
// var urlaa = 'https://sheetdb.io/api/v1/xohx1pvt0n4f9'
// axios.get(urlaa).then(function(response) {
//     var Datauser = response.data
//     for (let i = 0; i < Datauser.length; i++) {
//         user.push(Datauser[i])
//         hellogiohangh3.innerHTML = `Hello: ${user[i].username}`
//     }
// });