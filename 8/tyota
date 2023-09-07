function validate() {
    var isFnameUnder10 = fnameInput.value.length < 10
    var is18Oover = new Date().getFullYear() - +ageInput.value.substr(0, 4) >= 18;
    var isPassMatch = pass1Input.value == pass2Input.value;
    var isEmailValid = emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 && emailInput.value.length > 3;
    if (isFnameUnder10 && isEmailValid && is18Oover && isPassMatch) {
        return true;
    }
    else {
        if (!isFnameUnder10) {
            fNameLbl.innerHTML = "First Name<span>* name must be under 10 chars</span>"
            fNameLbl.style.color = "red"
            fnameInput.style.border = "1px dotted red"
        }
    }
    return false
}
function isFirstNameValid() {
    var isFnameUnder10 = fnameInput.value.length < 10
    if (isFnameUnder10) {
    fNameLbl.innerHTML = "First Name"
    fNameLbl.style.color = "black"
    fnameInput.style.border = "1px solid black"
    return true;
    }
    fNameLbl.innerHTML = "First Name<span>* name must be under 10 chars</span>"
    fNameLbl.style.color = "red"
    fnameInput.style.border = "1px dotted red"
    return false
}
btn.disabled = true;
ageInput.disabled = true;
fnameInput.addEventListener("input", function () {
    btn.disabled = !isFirstNameValid()
})
fnameInput.addEventListener("change", function () {
    ageInput.disabled = !isFirstNameValid()
})
btn.style.background = "red"
console.log(document.getElementById("btn"));