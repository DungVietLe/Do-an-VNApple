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


//them so mau do vao vao gio hang thanh nav
var countsanpham = document.querySelector('.count-sanpham')
    // fetch("http://localhost:3000/product")
    // .then(function(response) {
    //     return response.json()
    // })
    // .then(function(data) {
    //         if(data.length > 0){
    //         countsanpham.innerText= data.length;
    //         countsanpham.style.display = 'block'
    //         }
    //         else{
    //         countsanpham.style.display = 'none'
    //         }
    // })
    //end them so vao duoi

//Thêm tên acount dưới cái giỏ
let nameacount = document.getElementById('nameacount')
fetch("http://localhost:3000/user")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        data.map(function(count) {
            if (count.isActive === true) {
                nameacount.innerText = count.name;
                fetch("http://localhost:3000/product")
                    .then(function(response) {
                        return response.json()
                    })
                    .then(function(data) {
                        if (data.length > 0) {
                            countsanpham.innerText = data.length;
                            countsanpham.style.display = 'block'
                        } else {
                            countsanpham.style.display = 'none'
                        }
                    })
            }
        })
    })

//End Thêm tên dưới giỏ hàng

//Thêm sự kiện, đăng nhập xong ấn vào account trên thanh nav thì ra giỏ hàng
let accountcheck = document.getElementById('account-check')
fetch("http://localhost:3000/user")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        data.map(function(count) {
            if (count.isActive === true) {
                accountCheck.removeAttribute('href')
                accountcheck.setAttribute('href', '/giohang/giohang.html')
                accountCheck.innerHTML = `Hi ${count.name}`
            }
        })
    })

//  //Nút đăng xuất 
var Signout = document.getElementById('getNamePC')
console.log(Signout)
fetch("http://localhost:3000/user")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        for (e of data) {
            if (e.isActive === true) {
                Signout.innerHTML = 'Log Out'
                Signout.onclick = function() {

                    //đây là put logout đổi trạng thái
                    fetch("http://localhost:3000/user/" + e.id, {
                            method: "PUT",
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                "name": e.name,
                                "password": e.password,
                                "isActive": false
                            })
                        })
                        .then((response) => {
                            response.json()
                        })
                        .then((fix) => {
                            console.log(fix);
                        })
                    nameacount.innerText = "Sign in"
                    Signout.removeAttribute('href')
                    Signout.setAttribute('href', '/Danh Sach Nav/Esim/esim.html')
                }
            }
        }
    })