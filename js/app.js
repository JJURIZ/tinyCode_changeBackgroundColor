let inputHexText = document.getElementById("hex_input_text"),
    hexInputButton = document.getElementById("hex_input_button"),
    resetButton = document.getElementById("reset_color"),
    displayHexText = document.getElementById("hex_text"),
    colorState = 0;


hexInputButton.addEventListener("click", function () {
    let getHex = inputHexText.value.toUpperCase();
    displayHexText.innerHTML += `You have selected ${getHex}. <br>`;
    document.body.style.backgroundColor = `#${getHex}`;
    
    //when user clicks the button do the following:
    //Get the value from the input box
    //confirm the value is a valid hex code
    // 0-9, A-F
});

