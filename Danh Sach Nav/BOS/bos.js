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

var url = 'https://sheetdb.io/api/v1/ab8r7n5q7kzsx'
accountCheck.addEventListener('click', function(e){
    e.preventDefault()
    var  productArray = [];
    axios.get(url).then(function(response) {
        var Dataproduct = response.data
        for (let i = 0; i < Dataproduct.length; i++) {
            productArray.push(Dataproduct[i]) 
        }
        console.log(productArray)
        if(productArray.length === 0){
            location.href = "/Danh Sach Nav/Esim/esim.html"
        }
        else{
            location.href = '/giohang/giohang.html'
        }
    });
})