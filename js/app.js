let inputHexText = document.getElementById("hex_input_text"),
    hexInputButton = document.getElementById("hex_input_button"),
    resetButton = document.getElementById("reset_color"),
    displayHexText = document.getElementById("hex_text"),
    colorState = 0;

let checkInput = function checkInput(alphanum){
    let hexCheck = /^[0-9a-fA-F]/;
    if(inputHexText.value.match(hexCheck)){
        return true;
    } else {
        alert("Please enter a valid Hex code.");
        return false;
    }
}

hexInputButton.addEventListener("click", function () {
    let getHex = inputHexText.value.toUpperCase();
    displayHexText.innerHTML += `You have selected ${getHex}. <br>`;
    document.body.style.backgroundColor = `#${getHex}`;
    checkInput();
    
    //when user clicks the button do the following:
    //Get the value from the input box -DONE
    //confirm the value is a valid hex code -NOT DONE
    // 0-9, A-F
    //change background color-DONE
    //log background colors-DONE
    //Also, need to reduce size of image.-DONE
    //Need to add text and header. 
});

