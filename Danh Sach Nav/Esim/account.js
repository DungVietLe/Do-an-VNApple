let checkValueInput = document.querySelector("#checkinput");
let messageError = document.querySelector(".message-error");
let checkInputPass = document.querySelector("#checkinputPass");
let messageErrorPasss = document.querySelector(".message-errorPass")
let changeMessage = document.querySelector(".errorPass");
let changeMessage2 = document.querySelector(".errorPass2")
let checkDangki = document.querySelector("#checkDangKi");
let checkPassDangki = document.querySelector("#checkPassDangki");
let msDangKi = document.querySelector(".message-errorDangki");
let msPassDangKi = document.querySelector(".message-errorPassDangki");
let linkDangKi = document.querySelector(".creat-idPC");
let containerDangNhap = document.querySelector(".signin-box-PC");
let containerDangKi = document.querySelector(".regis-box-PC");
let btnDangki = document.querySelector("#btn-DangKi");
let url = "https://sheetdb.io/api/v1/nzd7ctie6ie8u";
let valuePass2 = document.querySelector("#checkPassDangki2");
let msError2 = document.querySelector(".message-errorPassDangki2");
let btnDangnhap = document.querySelector('.btn-detail-siginPC')
btnDangki.addEventListener("click", function() {

    if (checkDangki.value === "" || checkPassDangki.value === "" || valuePass2.value != checkPassDangki.value) {
        alert("Error , Please REGIS retry");
    } else {
        let userDangki = [];
        let myObj = {
            name: checkDangKi.value,
            password: checkPassDangki.value

        }
        userDangki.push(myObj);
        for (let i = 0; i < userDangki.length; i++) {
            console.log(userDangki[i]);
        }
        axios.post(url, { username: checkDangKi.value, password: checkPassDangki.value }).then((response) => console.log(response));
        alert("Registered Successfully");
        if (containerDangNhap.classList.contains("off") === true) {
            containerDangNhap.classList.remove("off")
        }
        if (containerDangKi.classList.contains("off") === false) {
            containerDangKi.classList.add("off")
        }
    }

})





var productArray = []
axios.get(url).then(function(response) {
    var Datauser = response.data
    for (let i = 0; i < Datauser.length; i++) {
        productArray.push(Datauser[i])
    }
});
console.log(productArray)
var oldURL = document.referrer;
console.log(oldURL)
btnDangnhap.addEventListener("click", function(e) {
    e.preventDefault();
    var check = 1;
    for (let i = 0; i < productArray.length; i++) {
        if (checkValueInput.value == productArray[i].username && checkInputPass.value == productArray[i].password) {
            check = check * 2;
        } else {
            check = check * 1;
        }
    }
    if(check%2==0){
        var BoxCommit = document.querySelector('.BoxCommit')
        var detailsiginPC = document.querySelector('.detail-siginPC')
        if(oldURL == "http://127.0.0.1:5500/Danh%20Sach%20Nav/KhamPha/khampha.html"){
            detailsiginPC.style.display = 'none'
            BoxCommit.style.display = 'block'
            setTimeout( function(){
                location.href = "http://127.0.0.1:5500/Danh%20Sach%20Nav/KhamPha/khampha.html"
            },  600)
        }
        else{
            detailsiginPC.style.display = 'none'
            BoxCommit.style.display = 'block'
            setTimeout( function(){
                location.href = 'http://127.0.0.1:5500/Danh%20Sach%20Nav/product/product.html'
            },  600)
            // location.href = 'http://127.0.0.1:5500/Danh%20Sach%20Nav/product/product.html'
        }
        
    }else{
        detailsiginPC.style.display = 'block'
        BoxCommit.style.display = 'none'
        console.log('that bai') 
    }
})




linkDangKi.addEventListener("click", function() {
    console.log(this);
    if (containerDangNhap.classList.contains("off") === false) {
        containerDangNhap.classList.add("off")
    }
    if (containerDangKi.classList.contains("off")) {
        containerDangKi.classList.remove("off")
    }
})

function checkValueName() {

    if (checkValueInput.value === "") {
        messageError.classList.remove("off");
        checkValueInput.style.border = "1px solid #e30000";
        checkValueInput.style.backgroundColor = "#fff2f4";

    }
    checkValueInput.addEventListener("click", function() {
        messageError.classList.add("off");
        checkValueInput.style.border = "1px solid #d2d2d7";
        checkValueInput.style.backgroundColor = "#fff";
        // checkValueInput.style.boxShadow = "0 0 0 4px rgb(0 125 250 / 60%)";
        // checkValueInput.style.outLine = "none"
    })
}

function checkValuePass() {
    if (checkInputPass.value === "") {
        messageErrorPasss.classList.remove("off");
        checkInputPass.style.border = "1px solid #e30000";
        checkInputPass.style.backgroundColor = "#fff2f4";

    }
    checkInputPass.addEventListener("click", function() {
        messageErrorPasss.classList.add("off");
        checkInputPass.style.border = "1px solid #d2d2d7";
        checkInputPass.style.backgroundColor = "#fff";
        // checkValueInput.style.boxShadow = "none";
        // checkValueInput.style.outLine = "none"
    })
    if (checkInputPass.value.length >= "1" && checkInputPass.value.length < "6") {
        changeMessage.innerText = "Please enter than 6 value"
        messageErrorPasss.classList.remove("off");
        checkInputPass.style.border = "1px solid #e30000";
        checkInputPass.style.backgroundColor = "#fff2f4";

    }
}

function checkValueDangKi() {
    if (checkDangki.value === "") {
        msDangKi.classList.remove("off");
        checkDangki.style.border = "1px solid #e30000";
        checkDangki.style.backgroundColor = "#fff2f4";

    }
    checkDangki.addEventListener("click", function() {
        msDangKi.classList.add("off");
        checkDangki.style.border = "1px solid #d2d2d7";
        checkDangki.style.backgroundColor = "#fff";
        // checkValueInput.style.boxShadow = "0 0 0 4px rgb(0 125 250 / 60%)";
        // checkValueInput.style.outLine = "none"
    })
}

function checkValuePassDangKi() {
    if (checkPassDangki.value === "") {
        msPassDangKi.classList.remove("off");
        checkPassDangki.style.border = "1px solid #e30000";
        checkPassDangki.style.backgroundColor = "#fff2f4";

    }
    checkPassDangki.addEventListener("click", function() {
        msPassDangKi.classList.add("off");
        checkPassDangki.style.border = "1px solid #d2d2d7";
        checkPassDangki.style.backgroundColor = "#fff";
        // checkValueInput.style.boxShadow = "none";
        // checkValueInput.style.outLine = "none"
    })
    if (checkPassDangki.value.length >= "1" && checkPassDangki.value.length < "6") {
        changeMessage.innerText = "Please enter than 6 value"
        msPassDangKi.classList.remove("off");
        checkPassDangki.style.border = "1px solid #e30000";
        checkPassDangki.style.backgroundColor = "#fff2f4";

    }
}

function checkValuePassDangKi2() {
    console.log("hi");
    console.log(valuePass2.value);
    if (valuePass2.value != checkPassDangki.value) {
        msError2.classList.remove("off")
        valuePass2.style.border = "1px solid #e30000";
        valuePass2.style.backgroundColor = "#fff2f4";
        changeMessage2.innerText = "Password dont match,Please retry";
    }
    if (valuePass2.value === checkPassDangki.value) {
        msError2.classList.add("off");
        valuePass2.style.border = "1px solid #d2d2d7";
        valuePass2.style.backgroundColor = "#fff";
    }
}