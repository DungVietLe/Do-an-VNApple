var localStorage = window.localStorage.getItem('macbookid');
var idStorage = Number(localStorage.macbookid ) 
var Namemacbook = document.querySelector('.Namemacbook')
var changePrice = document.querySelector('#changePrice-ipPC')
var contentdetails = document.querySelector('.content-details')
function renderview(){
    fetch("http://localhost:3000/macbook")
    .then(function (response) {
         return response.json()
    })
    .then(function (data) {
        
            Namemacbook.innerText = data[idStorage-1].tensanpham;
            changePrice.innerText = data[idStorage-1].giasanpham;
            contentdetails.innerText = data[idStorage-1].details
})
}
renderview();
