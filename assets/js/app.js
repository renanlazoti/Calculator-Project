function Calculate() {
    var value1 = document.getElementById("first-factor").value;
    var value2 = document.getElementById("second-factor").value;
    var operation = document.getElementById("operation").value;
    var output;
    
    switch(operation){
        case "+":
            output = Number(value1) + Number(value2);
            break;
        case "-":
            output = Number(value1) - Number(value2);
            break;
        case "*":
            output = Number(value1) * Number(value2);
            break
        case "/":
            output = Number(value1) / Number(value2);
            break;
        default: 
            break;
    }

    document.getElementById("result").value = output;
    
}