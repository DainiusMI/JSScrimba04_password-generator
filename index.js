

let stOptionEl = document.getElementById('option1');
let ndOptionEl = document.getElementById('option2');
let rdOptionEl = document.getElementById('option3');
let thOptionEl = document.getElementById('option4');
let passwordLenghtEl = document.getElementById('password-lenght');

let charPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let charArray = [];

function formCharArray() {
    for (let i = 0; i < charPool.length; i++) {
        charArray[i] = charPool[i];
        charArray[i+charPool.length] = charPool[i].toUpperCase();
        if (i < 10) {
            charArray[charPool.length*2+i] = i;
        }
    }
console.log(charArray);
}
formCharArray();

function generatePassword() {
    let generatedPassword = '';
    for (let i = 0; i < passwordLenghtEl.value; i++) {
        generatedPassword += charArray[
            Math.floor(Math.random()*charArray.length)
        ]
    }
    return generatedPassword;
}
function runGenerator() {
    stOptionEl.value = generatePassword();
    ndOptionEl.value = generatePassword();
    rdOptionEl.value = generatePassword();
    thOptionEl.value = generatePassword();
}

function copyPassword() {
    let copiedPassword = document.activeElement.value;
    navigator.clipboard.writeText(copiedPassword);
    alert("Copied the text: " + copiedPassword);
}
