function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}
var input = input_field.value;
function validate(){
    var userInput = input_field.value;
    if(userInput[0]==0){
        alert("Enter a valid number");
    }
    else if(userInput.length>10){
        alert("Enter a 10 digit number.");
    }
}

