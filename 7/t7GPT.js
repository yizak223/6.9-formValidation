
function checkForm() {
    var userName = document.getElementById("userName");
    var emailUser = document.getElementById("emailUser");
    var birthdayUser = document.getElementById("birthdayUser");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");

    var isNameUnder = userName.value.length < 10;
    var isemailContain = emailUser.value.includes(".com");
    var isAgeOver18 = new Date().getFullYear() - new Date(birthdayUser.value).getFullYear() >= 18;
    var ispasswordEqulas = pass1.value === pass2.value;

    // Reset error messages and borders
    document.getElementById("nameUser").textContent = "";
    userName.style.border = "";
    document.getElementById("userNamemail").textContent = "";
    emailUser.style.border = "";
    document.getElementById("userBirthday").textContent = "";
    birthdayUser.style.border = "";
    document.getElementById("userPass2").textContent = "";
    pass2.style.border = "";

    if (isNameUnder && isemailContain && isAgeOver18 && ispasswordEqulas) {
        return true;
    }

    if (!isNameUnder) {
        document.getElementById("nameUser").textContent = "Username must be less than 10 characters.";
        userName.style.border = "1px solid red";
    }

    if (!isemailContain) {
        document.getElementById("userNamemail").textContent = "Email must contain '.com'.";
        emailUser.style.border = "1px solid red";
    }

    if (!isAgeOver18) {
        document.getElementById("userBirthday").textContent = "You must be 18 or older to sign up.";
        birthdayUser.style.border = "1px solid red";
    }

    if (!ispasswordEqulas) {
        document.getElementById("userPass2").textContent = "Passwords do not match.";
        pass2.style.border = "1px solid red";
    }

    return false;
}