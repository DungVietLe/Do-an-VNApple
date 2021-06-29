// tao form dang ki dang nhap ;
//b1 cho ng dung dang ki 
// lay ra nhung elemnt cua user passwork thong tin 
// khi click vao submid se thong bao thanh cong va dong thoi
// push obj vao 1 mang 
// xu li dang nhap
// let inputUsername = document.getElementById("username");
// let inputPassword = document.getElementById("password");
// let rePassword = document.getElementById("re-password");

// let form = document.getElementById("form-regis");

// let btn = document.getElementById("btn-submit");
// let url = "https://sheetdb.io/api/v1/nzd7ctie6ie8u";
// let user = []
// form.addEventListener("submit", function(e) {
//     e.preventDefault()


//     let dataUser = {
//         name: inputUsername.value,
//         password: inputPassword.value
//     }
//     if (inputUsername.value === "" || inputPassword.value === "" || rePassword.value === "") {
//         alert("vui long dang ki lai ")
//     } else if (inputPassword.value != rePassword.value) {
//         alert("mat khau k khop !")
//     } else(
//             user.push(dataUser)
//         )
//         // console.log(user);
//     axios.get(url).then((response) => console.log(response.data));
//     axios.post(url, { username: inputUsername.value, password: inputPassword.value }).then((response) => console.log(response));
//     location.replace("/signin.html");

// })
var accountCheck = document.querySelector('#account-check')
let search = document.getElementById("search-nav");
let nav = document.querySelector(".nav");
let elNav = document.querySelectorAll(".nav-product")
Array.from(elNav)
let close = document.getElementById("close");
let modal_search = document.querySelector(".modal-nav")
let searchBox = document.querySelector(".search-box");
let messBox = document.querySelector(".mess-box");
let containerBody = document.querySelector(".wrapper-body-container");
let styleIcon = document.querySelector(".icon-bars-mobile");
let iconStyleHead = document.querySelector(".line-bars-head");
let iconStyleEnd = document.querySelector(".line-bars-end");
let listNavMobile = document.querySelector(".list-nav-mobile");
let iconBag = document.querySelector(".icon-bags-mb");
var url = 'https://sheetdb.io/api/v1/xohx1pvt0n4f9'
var urlsanpham = 'https://sheetdb.io/api/v1/8eo9evgklp5lb'
console.log(iconBag);

close.addEventListener("click", function(e) {
    e.preventDefault()
    for (let i = 0; i < elNav.length; i++) {
        if (elNav[i].classList.contains("animate__animated", "animate__fadeOutLeft")) {
            elNav[i].classList.remove("animate__animated", "animate__fadeOutLeft");
            elNav[i].classList.add("animate__animated", "animate__fadeInLeft")
        }
    }
    if (messBox.classList.contains("animate__animated", "animate__fadeInRight")) {
        messBox.classList.remove("animate__animated", "animate__fadeInRight");
        // messBox.classList.add("animate__animated", "animate__fadeOutRight")
        messBox.classList.add("off")
    }
    if (searchBox.classList.contains("animate__animated", "animate__fadeInRight")) {
        searchBox.classList.remove("animate__animated", "animate__fadeInRight");
        // searchBox.classList.add("animate__animated", "animate__fadeOutRight");
        searchBox.classList.add("off");
    }
    if (modal_search.classList.contains("on")) {
        modal_search.classList.remove("on")
    }
})

search.addEventListener("click", function(e) {
    e.preventDefault()
    for (let i = 0; i < elNav.length; i++) {
        elNav[i].classList.add("animate__animated", "animate__fadeOutLeft");
    }
    if (searchBox.classList.contains("off")) {
        searchBox.classList.remove("off");
        searchBox.classList.add("animate__animated", "animate__fadeInRight");
    }
    if (messBox.classList.contains("off")) {
        messBox.classList.remove("off");
        messBox.classList.add("animate__animated", "animate__fadeInRight");
    }
    modal_search.classList.add("on")
})
styleIcon.addEventListener("click", function(e) {
        e.preventDefault()
        if (iconStyleHead.classList.contains("rotate") === false) {
            iconStyleHead.classList.add("rotate");
        } else {
            iconStyleHead.classList.remove("rotate");
            iconStyleHead.classList.add("off-rotate");
        }

        if (iconStyleEnd.classList.contains("rotate2") === false) {
            iconStyleEnd.classList.add("rotate2");
        } else {
            iconStyleEnd.classList.remove("rotate2");
            iconStyleEnd.classList.add("off-rotate2");
        }
        if (listNavMobile.classList.contains("off") === true) {
            listNavMobile.classList.remove("off");
            listNavMobile.classList.add("animate__animated", "animate__slideInDown")
        } else if (listNavMobile.classList.contains("animate__slideInDown") === true) {
            listNavMobile.classList.remove("animate__slideInDown");
            listNavMobile.classList.add("off");

        }


        if (iconBag.classList.contains("off") === false) {
            iconBag.classList.add("off");
        } else {
            iconBag.classList.remove("off");
        }





    })
    search.addEventListener("click", function(e) {
        e.preventDefault()

    for (let i = 0; i < elNav.length; i++) {

        elNav[i].classList.add("hidden")
        if (elNav[i].classList.contains("animate__animated", "animate__backInLeft")) {
            elNav[i].classList.remove("animate__animated", "animate__backInLeft")
        }
    }
    searchBox.classList.remove("off")
    searchBox.classList.add("animate__animated", "animate__fadeInRight")
    if (messBox.classList.contains("off")) {
        messBox.classList.remove("off")
        messBox.classList.add("block")
        messBox.classList.add("animate__animated", "animate__fadeInBottomRight");
    }
    containerBody.classList.add("modal")

})


close.addEventListener("click", function(e) {
    e.preventDefault()
    searchBox.classList.add("off")
    nav.classList.remove("none")
    for (let i = 0; i < elNav.length; i++) {
        if (elNav[i].classList.contains("hidden")) {
            elNav[i].classList.remove("hidden")
            elNav[i].classList.add("animate__animated", "animate__backInLeft")
        }
    }
    if (messBox.classList.contains("block")) {
        messBox.classList.remove("block");
        messBox.classList.add("off")
    }
    messBox.classList.remove("animate__animated", "animate__fadeInBottomRight")
    containerBody.classList.remove("modal")

})


//Ẩn/hiện shopping bag
let hiddenBag = document.querySelector("#search-bag")
let bag = document.querySelector(".container-bag");
hiddenBag.addEventListener("click", function(e) {
    e.preventDefault();

    if (bag.style.display === "block") {
        bag.style.display = "none"
    } else {
        bag.style.display = "block"
    }
})







// chuyen trang productjs
btnBuyPc = document.querySelector('.btn-buyPC');
btnBuyPc.addEventListener('click', function(e) {
    e.preventDefault();
    // var oldURL = document.referrer;
    var userApi = "http://localhost:3000/user";
    fetch(userApi)
    .then(function(response) {
    return response.json();
    })
    .then(function(users) {
        console.log(users.length)
        if (users.length === 1) {
            location.href = "/Danh Sach Nav/Esim/esim.html"
        } else {
            location.href = '/Danh Sach Nav/product/buy-iphone/iphone-12pro.html'
        }
    })
})


// accountCheck.addEventListener('click', function(e) {
//     e.preventDefault()
//     axios.get(url).then(function(response) {
//         var Dataproduct = response.data
//         for (let i = 0; i < Dataproduct.length; i++) {
//             productArray.push(Dataproduct[i])
//         }
//         console.log(productArray)
//         if (productArray.length === 0) {
//             location.href = 'http://127.0.0.1:5500/Danh%20Sach%20Nav/Esim/esim.html'
//         } else {
//             location.href = '/giohang/giohang.html'
//         }
//     });
// })

var spancount = document.querySelector('.count-sanpham')
var productApi = "http://localhost:3000/product";
//Them so o gio hang
fetch(productApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        console.log(products)
        var checkcount = products.length;
            if(checkcount === 0) {
                spancount.style.display = 'none'
             } else {
                spancount.style.display = 'block'
                spancount.innerText = checkcount;
            }
})
// ket thuc them so

//test in ra data
var userApi = "http://localhost:3000/user";
fetch(userApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {
        console.log(users)
        for(let i = 0; i< users.length;i++){
            console.log(users[i])
        }
 })
//end test in ra

//Check account dang nhap hay chua, dang nhap thi an vao account ra gio hang, chua thi bat dang nhap
 accountCheck.addEventListener('click', function(e) {
        e.preventDefault()
        var userApi = "http://localhost:3000/user";
        fetch(userApi)
        .then(function(response) {
        return response.json();
        })
        .then(function(users) {
            console.log(users.length)
            if (users.length === 1) {
                location.href = 'http://127.0.0.1:5500/Danh%20Sach%20Nav/Esim/esim.html'
            } else {
                location.href = '/giohang/giohang.html'
            }
        })
})
//end check account

//Them ten vao duoi gio hang thanh nav
let getName = document.getElementById("getNamePC");
var listLgUser = [];
fetch(userApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {
        console.log(users)
        for(let i = 0; i< users.length;i++){
            if (users.length === 0) {
                getName.innerText = "Sign in"
            } else {
                getName.innerHTML = `<a href=''> ${users[i].name}</a>`
            }
        }
 })
//end them ten vao duoi gio hang thanh nav

