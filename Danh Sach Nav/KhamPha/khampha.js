var OnMac = document.querySelector('.OnMac')
var OffMac = document.querySelector('.OffMac')
var mac = document.getElementById('MAC')
var imac = document.getElementById('IMAC')
var btnmac13Pc = document.querySelector('.btnmac13Pc')
var btnimac = document.querySelector('#btnimacpc')

var chuyenmuamac = document.querySelector('.chuyenmuamac')
var chuyenmuaimac = document.querySelector('.chuyenmuaimac')


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


// btnmac13Pc.addEventListener('click', function() {


// })

// btnimac.addEventListener('click', function(e) {
//     e.preventDefault()
//     fetch(userApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(users) {
//             console.log(users.length)
//             if (users.length === 1) {
//                 location.href = "/Danh Sach Nav/Esim/esim.html"
//             } else {
//                 location.href = '/Danh Sach Nav/KhamPha/iMac/iMac.html'
//             }
//         })
// })