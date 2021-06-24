var ArraycolorImage = [
    '/images/iphone-xr-blue-bos.png',
    '/images/iphone-xr-red-bos.png',
    '/images/iphone-xr-yellow-bos.png',
    '/images/iphone-xr-bos.png'
]
    
   
function angleleftFun(){
    var Valueimg = document.getElementById('Imagesdirectionalvalueimg')
    console.log(Valueimg.getAttribute('src'))
    var checksrc = Valueimg.getAttribute('src') 
    if (checksrc == '/images/iphone-xr-bos.png') {
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-red-bos.png')
    }
    else if(Valueimg.getAttribute('src') == '/images/iphone-xr-red-bos.png'){
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-blue-bos.png')
    }
    else if (Valueimg.getAttribute('src') =='/images/iphone-xr-blue-bos.png') {
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-yellow-bos.png')
    }
    else{
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-bos.png')
    }
}
function anglerightFun(){
    var Valueimg = document.getElementById('Imagesdirectionalvalueimg')
    console.log(Valueimg.getAttribute('src'))
    var checksrc = Valueimg.getAttribute('src') 
    if (checksrc == '/images/iphone-xr-bos.png') {
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-yellow-bos.png')
    }
    else if(Valueimg.getAttribute('src') == '/images/iphone-xr-yellow-bos.png'){
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-blue-bos.png')
    }
    else if (Valueimg.getAttribute('src') =='/images/iphone-xr-blue-bos.png') {
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-red-bos.png')
    }
    else{
        Valueimg.removeAttribute('src')
        Valueimg.setAttribute('src', '/images/iphone-xr-bos.png')
    }
}
