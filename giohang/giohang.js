var UserNameDangnhap = document.querySelector('.UserNameDangnhap')
var urlsanpham = 'https://sheetdb.io/api/v1/8eo9evgklp5lb'
var productArray = []
var hellogiohangh3 = document.querySelector('.helo-3')
var ImgSanphamgiohang = document.querySelector('.img-Sanpham-gio-hang')
var Tensanphamgiohang = document.querySelector('.Tensanpham-gio-hang')
var Giasanphamgiohang = document.querySelector('.Giasanpham-gio-hang-span')
axios.get(urlsanpham).then(function(response) {
    var Dataproduct = response.data
    for (let i = 0; i < Dataproduct.length; i++) {
        productArray.push(Dataproduct[i])
        setTimeout(function(){
            Tensanphamgiohang.innerHTML = `Name Product: ${productArray[i].tensanpham}`
            Giasanphamgiohang.innerText= productArray[i].dongia;
        },300)
    }
    
});

console.log(productArray)

axios.get(url).then(function(response) {
    var Datauser = response.data
    for (let i = 0; i < Datauser.length; i++) {
        user.push(Datauser[i])
        setTimeout(function(){
            hellogiohangh3.innerHTML = `Hello: ${user[i].username}`
        },300) 
        // UserNameDangnhap.innerText = `Hello: ${user[i].username}`
    }
});
console.log(user)
console.log(hellogiohangh3)





