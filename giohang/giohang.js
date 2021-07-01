var UserNameDangnhap = document.querySelector('.UserNameDangnhap')
var productArray = []
var hellogiohangh3 = document.querySelector('.helo-3')
var ImgSanphamgiohang = document.querySelector('.img-Sanpham-gio-hang')
var Tensanphamgiohang = document.querySelector('.Tensanpham-gio-hang')
var Giasanphamgiohang = document.querySelector('.Giasanpham-gio-hang-span');
var gioHangCha = document.querySelector("#giohang");
let nameUserBuy = document.querySelector(".ten-ng-mua");
let gioHangTrong = document.querySelector("#giohangtrong");


fetch("http://localhost:3000/product")
    .then((response) => {
        return response.json()
    })
    .then((dataApi) => {
        if (dataApi.length > 0) {
            if (gioHangCha.classList.contains("off") === true) {
                gioHangCha.classList.remove("off");
                gioHangTrong.classList.add("off");
            }
        }
        if (dataApi.length === 0) {
            if (gioHangTrong.classList.contains("off") === true) {
                gioHangTrong.classList.remove("off");
                gioHangCha.classList.add("off")
            }
        }

    });
// .then((products) => {
//     let parenUl = document.querySelector("#listProduct");
//     let htmls = products.map(function(product) {
//         return `
//         <li class="listProductbeforRender">
//         <img style="width:90px;height:85px;margin:8px" src="${product.url}" alt="">
//         <div class="detail-products">
//         <div>Name Product : ${product.tensanpham} </div>
//         <div>Price : ${product.giasanpham} $</div>
//         <div>Color : ${product.color}</div>
//         </div>
//         <div style="margin-right:24px;cursor:pointer;" onclick="btnDelete()">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//         <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//         </svg>
//         </div>

//         </li>

//         `;
//     })
//     parenUl.innerHTML = htmls.join("")
//         // parenUl.appendChild(newProduct)
// })

//set name
let detail_name_bill = document.querySelector(".ten-san-phammua");
let amount = document.querySelector("#so-luong");
let totalBill = document.querySelector("#total-bill")
fetch("http://localhost:3000/user")
    .then((response) => {
        return response.json()
    })
    .then((dataUser) => {
        if (dataUser.length > 0) {
            for (e of dataUser) {
                hellogiohangh3.innerHTML = `Hi: ${e.name}`;
                nameUserBuy.innerHTML = `Buyer : ${e.name}`;

            }
        }
    });
//setname
var productApi = "http://localhost:3000/product";


function start() {
    getProduct(renderProduct);
}



start();

//function
function getProduct(callback) {
    fetch(productApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)

}

fetch(productApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(bill) {
        var countcoin = 0;
        for (let i = 0; i < bill.length; i++) {
            amount.innerHTML = bill.length;
            let value = Number(bill[i].giasanpham)
            console.log(value)
            countcoin = countcoin + value;
        }
        totalBill.innerHTML = `${countcoin} $`
    })


function renderProduct(products) {
    let parenUl = document.querySelector("#listProduct");
    var htmls = products.map(function(product) {
        return `
                <li class="listProductbeforRender">
               <img style="width:145px;height:163px;margin:8px" src="${product.url}" alt="">
               <div class="detail-products">
               <div>Name Product :<span style="color:red"> ${product.tensanpham}</span></div>
               <div>Price :<span style="color:red" id="total-price"> ${product.giasanpham}</span>$</div>
                <div>Color :<span style="color:red" > ${product.color}</span></div>
                </div>
                <div style="margin-right:24px;cursor:pointer;" onclick="btnDelete(${product.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </div>
        
                </li>
        
                `;
    });
    parenUl.innerHTML = htmls.join('')

};

function btnDelete(id) {
    var options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(productApi + "/" + id, options)
        .then((response) => {
            response.json()
        })
        .then(function() {
            getProduct(renderProduct);
        })

};