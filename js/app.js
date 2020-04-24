'use strict';

let inputHexText = document.getElementById("hex_input_text"),
    hexInputButton = document.getElementById("hex_input_button"),
    resetButton = document.getElementById("reset_color"),
    displayHexText = document.getElementById("hex_text");

function validateHex() {
    var validChar = inputHexText.value;

    if (validChar.length > 6) {
        alert("Hex code cannot exceed 6 characters.");
        return false;
    } else if (/[^a-fA-F0-9/]/.test(inputHexText.value)) {
        alert('Only letters A - F are permitted');
        return false;
    } else {
        return true;
    }
};

hexInputButton.addEventListener("click", function () {
    let valResult = validateHex();
    if (valResult === true) {
        let getHex = inputHexText.value.toUpperCase();
        displayHexText.innerHTML += `You have selected ${getHex}. <br>`;
        document.body.style.backgroundColor = `#${getHex}`;
    }
});

resetButton.addEventListener("click", function () {
    let resetHex = '#FFFFFF'
    document.body.style.backgroundColor = resetHex;
    inputHexText.value = "";
});