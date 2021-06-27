var OnMac = document.querySelector('.OnMac')
var OffMac = document.querySelector('.OffMac')
var mac = document.getElementById('MAC')
var imac = document.getElementById('IMAC')
OnMac.addEventListener("click", function(e) {
    e.preventDefault()
        mac.style.visibility = 'visible'
        imac.style.visibility = 'hidden'
        
        mac.classList.remove('animate__fadeOut')
        mac.classList.add('animate__fadeIn')
        imac.classList.remove('animate__fadeIn')
        imac.classList.add('animate__fadeOut')
})

OffMac.addEventListener("click", function(e) {
    e.preventDefault()
        imac.style.visibility = 'visible'
        mac.style.visibility = 'hidden'
        mac.classList.remove('animate__fadeIn')
        // mac.classList.add('animate__fadeOut')
        imac.classList.remove('animate__fadeOut')
        imac.classList.add('animate__fadeIn')
})

var btnmac13Pc = document.querySelector('.btnmac13Pc')
var oldURL = document.referrer;
var chuyenmuamac = document.querySelector('.chuyenmuamac')
console.log(oldURL)
btnmac13Pc.addEventListener('click', function(e){
    e.preventDefault()
    // var oldURL = document.referrer;
    // console.log(oldURL)
    if(oldURL == "http://127.0.0.1:5500/Danh%20Sach%20Nav/Esim/esim.html"){
        location.href = '/Danh Sach Nav/KhamPha/Mac/Mac.html'
    }
    else{
        location.href = "/Danh Sach Nav/Esim/esim.html"
    }
})