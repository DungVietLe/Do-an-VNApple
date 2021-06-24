var OnMac = document.querySelector('.OnMac')
var OffMac = document.querySelector('.OffMac')
var mac = document.getElementById('MAC')
var imac = document.getElementById('IMAC')
OnMac.onclick = function(){
    if(mac.style.visibility == 'hidden'){
        imac.style.visibility = 'hidden'
        mac.style.visibility = ''
    }
    else{
        imac.style.visibility = ''
        mac.style.visibility = 'hidden'
    }
}
OffMac.onclick = function(){
    if(imac.style.visibility == 'hidden'){
        imac.style.visibility = ''
        mac.style.visibility = 'hidden'
    }
    else{
        imac.style.visibility = 'hidden'
        mac.style.visibility = ''
    }
}