var ArraycolorImage = [
    '/images/iphone-xr-blue-bos.png',
    '/images/iphone-xr-red-bos.png',
    '/images/iphone-xr-yellow-bos.png',
    '/images/iphone-xr-bos.png'
]
    
   
function angleleftFun(){
    var Valueimg = document.getElementById('Imagesdirectionalvalueimg')
    if (Valueimg.src.match("/images/iphone-xr-bos.png")) {
        Valueimg.src = "/images/iphone-xr-red-bos.png";
    }
    else if (Valueimg.src.match("/images/iphone-xr-red-bos.png")) {
        Valueimg.src = "/images/iphone-xr-red-bos.png";
    }
    else if(Valueimg.src.match("/images/iphone-xr-red-bos.png")){
        Valueimg.src = '/images/iphone-xr-yellow-bos.png';
    }
    else{
        Valueimg.src = "/images/iphone-xr-bos.png"
    }

function anglerightFun(){

}
