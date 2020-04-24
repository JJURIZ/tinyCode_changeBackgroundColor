let inputHexText = document.getElementById("hex_input_text"),
    hexInputButton = document.getElementById("hex_input_button"),
    resetButton = document.getElementById("reset_color"),
    displayHexText = document.getElementById("hex_text");

hexInputButton.addEventListener("click", function () {
    function validateHex() {
        var validChar = inputHexText.value;

        if (validChar.length > 6) {
            alert("Hex code cannot exceed 6 characters.");
            return false;
        } else if (/[^a-fA-F0-9/]/.test(inputHexText.value)) {
            alert('Only letters A - F are permitted');
            return false;
        }
    };

    if (validateHex = true) {
        let getHex = inputHexText.value.toUpperCase();
        displayHexText.innerHTML += `You have selected ${getHex}. <br>`;
        document.body.style.backgroundColor = `#${getHex}`;
    };

    resetButton.addEventListener("click", function () {
        let resetHex = '#FFFFFF'
        document.body.style.backgroundColor = resetHex;
    })

    //when user clicks the button do the following:
    //Get the value from the input box -DONE
    //confirm the value is a valid hex code -NOT DONE
    // 0-9, A-F - DONE
    //change background color-DONE
    //log background colors-DONE
    //Also, need to reduce size of image.-DONE
    //Need to add text and header. 
});

