let checkValueInput = document.querySelector("#checkinput");
let messageError = document.querySelector(".message-error");
let checkInputPass = document.querySelector("#checkinputPass");
let messageErrorPasss = document.querySelector(".message-errorPass")
let changeMessage = document.querySelector(".errorPass");

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