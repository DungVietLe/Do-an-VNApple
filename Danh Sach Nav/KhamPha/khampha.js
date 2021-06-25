var OnMac = document.querySelector('.OnMac')
var OffMac = document.querySelector('.OffMac')
var mac = document.getElementById('MAC')
var imac = document.getElementById('IMAC')
OnMac.addEventListener("click", function(e) {
    e.preventDefault()
        mac.classList.remove('animate__fadeOut')
        mac.classList.add('animate__fadeIn')
        imac.classList.remove('animate__fadeIn')
        imac.classList.add('animate__fadeOut')
})

OffMac.addEventListener("click", function(e) {
    e.preventDefault()
        mac.classList.remove('animate__fadeIn')
        mac.classList.add('animate__fadeOut')
        imac.classList.remove('animate__fadeOut')
        imac.classList.add('animate__fadeIn')
})