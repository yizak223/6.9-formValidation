// var isNameUnder = userName.value.length < 10;
// var isemailContain = emailUser.value.lastIndexOf(".com") == emailUser.value.length - 4;
// var isAgeOver18 = new Date().getFullYear() - +birthdayUser.value.substr(0, 4) >= 18
// var ispasswordEqulas = pass1.value == pass2.value;
function checkForm() {
    if (userName.value.length < 10
        && emailUser.value.lastIndexOf(".com") == emailUser.value.length - 4
        && new Date().getFullYear() - +birthdayUser.value.substr(0, 4) >= 18
        && pass1.value == pass2.value) {
        console.log(userName.value.length < 10);
        console.log(emailUser.value.lastIndexOf(".com") == emailUser.value.length - 4);
        console.log(emailUser.value.lastIndexOf(".com"));
        console.log(emailUser.value.length - 4);
        console.log(new Date().getFullYear() - +birthdayUser.value.substr(0, 4) >= 18);
        console.log(pass1.value == pass2.value);
        return true;
    }
    if (userName.value.length < 10 != true) {
        nameUser.innerHTML = `<span> user name less then 10 charat</span>.`
        userName.style.border = `1px solid red`
        console.log(userName.value.length < 10);
    }
    else{
        nameUser.innerHTML = ``
        userName.style.border = `1px solid`
    }
    if (emailUser.value.lastIndexOf(".com") == emailUser.value.length - 4 != true) {
        userNamemail.innerHTML = `<span> email doesnt contaim '.com' </span>`
        emailUser.style.border = `1px solid red`
        console.log('email condition' + emailUser.value.lastIndexOf(".com") == emailUser.value.length - 4);
        console.log(emailUser.value.lastIndexOf(".com"));
        console.log(emailUser.value.length - 4);
    }
    else{
        userNamemail.innerHTML = ``
        emailUser.style.border = `1px solid`
    }
    if (new Date().getFullYear() - +birthdayUser.value.substr(0, 4) >= 18 != true) {
        userBirthday.innerHTML = `<span> you are smaller </span>`
        birthdayUser.style.border = `1px solid red`
        console.log('year con' + new Date().getFullYear() - +birthdayUser.value.substr(0, 4) >= 18);
    }
    else{
        userBirthday.innerHTML = ``
        birthdayUser.style.border = `1px solid`
    }
    if (pass1.value == pass2.value !=true) {
        userPass2.innerHTML = `<span> the password isnt equals</span>`
        pass2.style.border = `1px solid red`
        console.log('pass con' + pass1.value == pass2.value);
    }
    else{
        userPass2.innerHTML = ``
        pass2.style.border = `1px solid`
    }
    console.log(userName.value.length < 10);
    console.log(emailUser.value.lastIndexOf(".com") == emailUser.value.length - 4);
    console.log(new Date().getFullYear() - +birthdayUser.value.substr(0, 4) >= 18);
    console.log(pass1.value == pass2.value);
    return false
}