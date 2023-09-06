function dontSent() {
    if (number1.value == number2.value) {
        alert('sent')
        return true
    }
    else {
        span1.innerHTML = `dontSEnt they are not equlas`
        return false
    }
}
// 2
function checkBigger() {
    if (num1.value > num2.value) {
        alert('sent')
        return true
    }
    else {
        span1.innerHTML = `dontSEnt the num1 is bigger`
        return false
    }
}
// 3
function checkequals() {
    if (text1.value == text2.value) {
        alert('sent')
        return true
    }
    else {
        span1.innerHTML = `dontSEnt they are not equals`
        return false
    }
}
// 4
function checkequalsLength() {
    if (text1T4.value.length == text2T4.value.length) {
        alert('sent')
        return true
    }
    else {
        span1.innerHTML = `dontSEnt your input isnt equal in there length`
        return false
    }
}
// 5
function checkequalsFirstChar() {
    if (text1T5.value[0] == text2T5.value[0]) {
        alert('sent')
        return true
    }
    else {
        span1.innerHTML = `dontSEnt your first char isnt equal`
        return false
    }
}
//6
//did it
