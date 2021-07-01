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
let btnDangNhap = document.querySelector("#btn-Dangnhap");
let valuePass2 = document.querySelector("#checkPassDangki2");
let msError2 = document.querySelector(".message-errorPassDangki2");

var BoxCommit = document.querySelector('.BoxCommit')
var detailsiginPC = document.querySelector('.detail-siginPC')



//Phần đăng kí
btnDangki.addEventListener("click", function() {

        fetch("http://localhost:3000/user")
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                for (e of data) {

                    // if (e.name === checkDangki.value) {
                    //     alert("The entered name already exists, Pls retry your UserName")
                    // }
                    if (e.name != checkDangki.value) {
                        fetch("http://localhost:3000/user", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                name: checkDangki.value,
                                password: checkPassDangki.value,
                                isActive: false

                            })
                        })
                    }
                }
            })


    })
    //Hết phần đăng kí user
    //Phần đăng nhập 
btnDangNhap.addEventListener("click", function() {
    console.log(btnDangNhap);
    fetch("http://localhost:3000/user")
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            for (e of data) {
                if (e.name === checkValueInput.value && e.password === checkInputPass.value) {

                    BoxCommit.style.display = 'block'
                    detailsiginPC.style.display = 'none'
                    
                    fetch("http://localhost:3000/user/" + e.id, {
                            method: "PUT",
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                "name": e.name,
                                "password": e.password,
                                "isActive": true
                            })
                        })
                        .then((response) => {
                            response.json()
                        })
                        .then((fix) => {
                            console.log(fix);
                        })
                        location.href = "/giohang/giohang.html";
                }
                if (e.name != checkValueInput.value && e.password === checkInputPass.value) {

                    messageError.classList.remove("off");
                    checkValueInput.style.border = "1px solid #e30000";
                    checkValueInput.style.backgroundColor = "#fff2f4";


                }
                // if (e.name === checkValueInput.value && e.password != checkInputPass.value) {

                //     messageErrorPasss.classList.remove("off");
                //     changeMessage.innerText = "Password wrong"
                //     checkInputPass.style.border = "1px solid #e30000";
                //     checkInputPass.style.backgroundColor = "#fff2f4";


                // }
                // if (e.name != checkValueInput.value && e.password != checkInputPass.value) {
                //     messageError.classList.remove("off");
                //     checkValueInput.style.border = "1px solid #e30000";
                //     checkValueInput.style.backgroundColor = "#fff2f4";
                //     messageErrorPasss.classList.remove("off");
                //     checkInputPass.style.border = "1px solid #e30000";
                //     checkInputPass.style.backgroundColor = "#fff2f4";
                //     alert("Account dont have in SYSTEM")


                // }
            }



        })


})


//Hết phần đăng nhập



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