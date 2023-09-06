var counter=0
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
        firstNameLabel.innerHTML = `<span> name need to start with upper case</span>`
        firstNameInput.style.border = `1px dotted red`
    }
    else {
        firstNameInput.style.border = ``
    }
    if (lastNameInput.value.length <= 20 != true) {
        lastNameLable.innerHTML = `<span>last name need to be less then 20 charat</span>`
        lastNameInput.style.border = `1px dotted red`
    }
    else {
        lastNameInput.style.border = ``
    }
    if (new Date().getFullYear() - +birthdayInput.value.substr(0, 4) > 16 != true
        ||new Date().getFullYear() - +birthdayInput.value.substr(0, 4) < 65 != true) {
        birthdayLabel.innerHTML = `<span>your age is less then 16 or more then 65</span>`
        birthdayInput.style.border = `1px dotted red`
    }
    else {
        birthdayInput.style.border = ``
    }
    if ((emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 != true
        || emailInput.value.lastIndexOf(".co.il") == emailInput.value.length - 6 != true)) {
        emailLabel.innerHTML = `<span>your email is not as exepted</span><br>`
        emailInput.style.border = `1px dotted red`
    }
    else {
        emailInput.style.border = ``
    }
    if (phoneInput.value[0] == 0 != true
        ||phoneInput.value.length == 10) {
        phoneLabel.innerHTML = `<span>your phone number most contain 10 numbers and start with 0</span><br>`
        phoneInput.style.border = `1px dotted red`
    }
    else{
        phoneInput.style.border = ``
    }
    counter++
    console.log(counter);
    if(counter==3)
    {
         startCONTER()
    }
    return false
    
}

var sec=30
myDiv.innerHTML=`00:${sec}`
myDiv.style=`float:right;
border:solid;
width:15vw;
height:15vh;
border-radius:20%;
text-align:center;
font-size:40px`
function countDown() {
    sec--
    myDiv.innerHTML=`00:${sec}`
    firstNameInput.disabled = true;
    lastNameInput.disabled = true;
    birthdayInput.disabled = true;
    emailInput.disabled = true;
    phoneInput.disabled = true;
    roleInput.disabled = true;
    btnSubmit.disabled = true;
    if(sec==0)
    {
        firstNameInput.disabled = false;
        lastNameInput.disabled = false;
        birthdayInput.disabled = false;
        emailInput.disabled = false;
        phoneInput.disabled = false;
        roleInput.disabled = false;
        btnSubmit.disabled = false;
        sec=30
        counter=0
        stopCounter()
        myDiv.innerHTML=`00:${sec}`
    }
}
var counterInterval;
function startCONTER() {
    counterInterval=setInterval(countDown,1000)
 
}
function stopCounter() {
    clearInterval(counterInterval)
}
