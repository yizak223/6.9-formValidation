var currnetHour = new Date().getHours()
var currentMinutes = new Date().getMinutes()
var currentSeconds = new Date().getSeconds()
var timeInterval;
function showTime() {
    currentTime.innerHTML = `<h1>${currnetHour}:${currentMinutes}:${currentSeconds}</h1>`
    if (currentSeconds < 10) {
        currentTime.innerHTML = `<h1>${currnetHour}:${currentMinutes}:0${currentSeconds}</h1>`
        if (currentMinutes < 10) {
            currentTime.innerHTML = `<h1>${currnetHour}:0${currentMinutes}:0${currentSeconds}</h1>`
        }
    }
    if (currentMinutes < 10) {
        currentTime.innerHTML = `<h1>${currnetHour}:0${currentMinutes}:${currentSeconds}</h1>`
    }
    currentSeconds++
    if (currentSeconds == 60) {
        currentSeconds = 0
        currentMinutes++
        if (currentMinutes == 60) {
            currentMinutes = 0
            currnetHour++
        }
    }
}
function timeActive() {
    timeInterval = setInterval(showTime, 1000)
}
timeActive()
var counter = 0
function checkForm() {
    if (
        firstNameInput.value[0] === firstNameInput.value[0].toUpperCase()
        && lastNameInput.value.length <= 20
        && new Date().getFullYear() - +birthdayInput.value.substr(0, 4) > 16
        && new Date().getFullYear() - +birthdayInput.value.substr(0, 4) < 65
        && (emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4
            || emailInput.value.lastIndexOf(".co.il") == emailInput.value.length - 6)
        && phoneInput.value[0] == 0
        && phoneInput.value.length == 10) {
        return true
    }
    if (firstNameInput.value[0] === firstNameInput.value[0].toUpperCase() != true) {
        firstNameLabel.innerHTML = `<span>*Name need to start with upper case</span>`
        firstNameInput.style.border = `3px solid red`
    }
    else {
        firstNameInput.style.border = ``
    }
    if (lastNameInput.value.length <= 20 != true) {
        lastNameLable.innerHTML = `<span>*Last name need to be less then 20 charat</span>`
        lastNameInput.style.border = `3px solid red`
    }
    else {
        lastNameInput.style.border = ``
    }
    if (new Date().getFullYear() - +birthdayInput.value.substr(0, 4) > 16 != true
        || new Date().getFullYear() - +birthdayInput.value.substr(0, 4) < 65 != true) {
        birthdayLabel.innerHTML = `<span>*Your age is less then 16 or more then 65</span>`
        birthdayInput.style = `border:3px solid red;`
        birthdayLabel.style = `color:rgb(241, 72, 72);`
    }
    else {
        birthdayInput.style.border = ``
    }
    if ((emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 != true
        && emailInput.value.lastIndexOf(".co.il") == emailInput.value.length - 6 != true)) {
        emailLabel.innerHTML = `<span>*Your email is not as exepted</span><br>`
        emailInput.style.border = `3px solid red`   
    }
    else {
        emailInput.style.border = ``
    }
    if (phoneInput.value[0] == 0 != true
        || phoneInput.value.length == 10!=true) {
        phoneLabel.innerHTML = `<span>*Your phone number most contain 10 numbers<br> and start with 0</span><br>`
        phoneInput.style.border = `3px solid red`
    }
    else {
        phoneInput.style.border = ``
    }
    counter++
    console.log(counter);
    if (counter == 4) {
        startCONTER()
    }
    return false

}

var sec = 30
timerTitle.innerHTML = `if you wrong 4 times the timer will start count down 30 sec`
timer.innerHTML = `00:${sec}`
function countDown() {
    sec--
    timer.innerHTML = `00:${sec}`
    firstNameInput.disabled = true;
    lastNameInput.disabled = true;
    birthdayInput.disabled = true;
    emailInput.disabled = true;
    phoneInput.disabled = true;
    roleInput.disabled = true;
    btnSubmit.disabled = true;
    if (sec < 10) {
        timer.innerHTML = `00:0${sec}`
    }
    if (sec == 0) {
        firstNameInput.disabled = false;
        lastNameInput.disabled = false;
        birthdayInput.disabled = false;
        emailInput.disabled = false;
        phoneInput.disabled = false;
        roleInput.disabled = false;
        btnSubmit.disabled = false;
        sec = 30
        counter = 0
        stopCounter()
        timer.innerHTML = `00:${sec}`
    }
}
var counterInterval;
function startCONTER() {
    counterInterval = setInterval(countDown, 1000)

}
function stopCounter() {
    clearInterval(counterInterval)
}

function isFirstNameValid() {
    if ( firstNameInput.value[0] === firstNameInput.value[0].toUpperCase()) {
        firstNameLabel.innerHTML = `<span></span>`
        return false;
    }else{        
        firstNameLabel.innerHTML = `<span>*Name need to start with upper case</span>`
        return true
    }
}
firstNameInput.addEventListener('change',
    function () {
        lastNameInput.disabled = isFirstNameValid()
})
function isLastNameValid() {
    if (lastNameInput.value.length <= 20) {
        lastNameLable.innerHTML = `<span></span>`
        return false
    }
    else{
        lastNameLable.innerHTML = `<span>*Last name need to be less then 20 charat</span>`
        return true
    }
}
lastNameInput.addEventListener('change',
function () {
    birthdayInput.disabled=isLastNameValid()
})
function isBirthdayValid() {
    if (new Date().getFullYear() - +birthdayInput.value.substr(0, 4) > 16 != true
    || new Date().getFullYear() - +birthdayInput.value.substr(0, 4) < 65 != true) {
        birthdayLabel.innerHTML = `<span>*Your age is less then 16 or more then 65</span>`
        birthdayInput.style = `border:3px solid red;`
        return true
    } else {
          birthdayInput.innerHTML = `<span>ff</span>`
        return false
    }
}
birthdayInput.addEventListener('change',forChangeBirh)
function forChangeBirh() {
    emailInput.disabled=isBirthdayValid()
}
function isEmailValid() {
    if ((emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 != true
        && emailInput.value.lastIndexOf(".co.il") == emailInput.value.length - 6 != true)) {
        
    } else {
        
    }
}