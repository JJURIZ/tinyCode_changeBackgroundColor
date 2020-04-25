'use strict';

let inputHexText = document.getElementById("hex_input_text"),
    hexInputButton = document.getElementById("hex_input_button"),
    resetButton = document.getElementById("reset_color"),
    displayHexText = document.getElementById("hex_text");

    // Validates character input limitations of Hex codes ( 0 - 9, a - f).
function validateHex() {
    if (/[^a-fA-F0-9/]/.test(inputHexText.value)) {
        alert('Only the letters A - F are permitted');
        return false;
    } else {
        return true;
    }
};

    // When Change Color button clicked, takes the user's value, changes background color, and records the user's choice on screen. 
hexInputButton.addEventListener("click", function () {
    let valResult = validateHex();
    if (valResult === true) {
        let getHex = inputHexText.value.toUpperCase();
        displayHexText.innerHTML += `You have selected ${getHex}. <br>`;
        document.body.style.backgroundColor = `#${getHex}`;
    }
});

    // When Reset Color button clicked, resets the background color to white. 
resetButton.addEventListener("click", function () {
    let resetHex = '#FFFFFF'
    document.body.style.backgroundColor = resetHex;
    inputHexText.value = "";
});