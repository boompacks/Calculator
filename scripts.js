const display = document.querySelector('.screen');
const clear = document.querySelector('.clear')
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const undo = document.querySelector('.undo');
const allButtons = document.querySelectorAll('.container > *')
let operand = [];
let operator = [];
let value = 0;

function add(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) + parseInt(b)
    }
    return "ERROR"
}


function subtract(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) - parseInt(b)
    }
    return "ERROR"
}


function multiply(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) * parseInt(b)
    }
    return "ERROR"
}


function divide(a, b){
    if (b != 0 && (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b)))){
        return parseInt(a) / parseInt(b)
    }
    return "ERROR"
}


function deleteLastNumber(){
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent == "") display.textContent = "0";
}


function clearBuffers(){
    operand = [];
    operator = [];
}


function clearDisplay(){
    display.textContent = "0";
    clearBuffers();
}


function showOnDisplay(e){
    if (display.textContent == "0") display.textContent = "";
    display.textContent += this.textContent;
}


function showOnDisplayKeyboard(value){
    if (display.textContent == "0") display.textContent = "";
    display.textContent += value;
}


function addOperator(e){
    operand.push(display.textContent);
    operator.push(this.textContent);
    display.textContent = "0";
}


function addOperatorKeyboard(value){
    operand.push(display.textContent);
    operator.push(value);
    display.textContent = "0";
}


function getResult(){
    operand.push(display.textContent);
    while (operator.length && operand.length) {
        let result = operate(operator.shift(), operand.shift(), operand.shift());
        operand.unshift(result);
    }
    display.textContent = operand[0];
    clearBuffers();
}


function operate(operation, partialResult, secondOperand){
    switch(operation){
        case "+":
            partialResult = add(partialResult, secondOperand);
            break;
        case "-":
            partialResult = subtract(partialResult, secondOperand);
            break;
        case "×":
            partialResult = multiply(partialResult, secondOperand);
            break;
        case "*":
            partialResult = multiply(partialResult, secondOperand);
            break;
        case "÷":
            partialResult = divide(partialResult, secondOperand);
            break;
        case "/":
            partialResult = divide(partialResult, secondOperand);
            break;
    }
    return partialResult
}






buttons.forEach(button => button.addEventListener('click', showOnDisplay));
clear.addEventListener('click', clearDisplay);
operators.forEach(operator => operator.addEventListener('click', addOperator));
equal.addEventListener('click', getResult);
undo.addEventListener('click', deleteLastNumber);


document.addEventListener('keydown', (key) =>{
    allButtons.forEach(button => {
        value = button.getAttribute('value');
        if (key.key == button.getAttribute('value')){
            if (key.key == "Enter"){
                getResult();
            } else if (key.key == "Backspace"){
                deleteLastNumber();
            } else if (key.key == "c"){
                clearDisplay();
            } else if (isNaN(parseInt(key.key))){
                addOperatorKeyboard(key.key)
            }
            else {
                showOnDisplayKeyboard(key.key);
            }
        }
    })
});
