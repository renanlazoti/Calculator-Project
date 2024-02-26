let value1 = document.getElementById("first-factor");
let value2 = document.getElementById("second-factor");
let operationResult = document.getElementById("result");
let numberDigits = document.querySelectorAll('.digits');
let focusedInput = "";

focusedInput = value1.focus();

numberDigits.forEach(function(button) {
    button.addEventListener('click', function() {       
        if (focusedInput) {
            focusedInput.value += button.value;

            focusedInput.focus();
        }
    });
});

value1.addEventListener('focus', function() {
    focusedInput = value1;
});

value2.addEventListener('focus', function() {
    focusedInput = value2;
});

function Calculate() {
    let operation = document.getElementById("operation").value;
    let output;
    
    switch(operation){
        case "+":
            output = Number(value1.value) + Number(value2.value);
            break;
        case "-":
            output = Number(value1.value) - Number(value2.value);
            break;
        case "*":
            output = Number(value1.value) * Number(value2.value);
            break
        case "/":
            output = Number(value1.value) / Number(value2.value);
            break;
        default: 
            break;
    }

   operationResult.value = output;
}

function Clear() {
    document.getElementById("first-factor").value = null;
    document.getElementById("second-factor").value = null;
    document.getElementById("result").value = null;
    value1.focus();
}