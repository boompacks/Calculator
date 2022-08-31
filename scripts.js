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


function addOperator(e){
    operand.push(display.textContent);
    operator.push(this.textContent);
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
        case "÷":
            partialResult = divide(partialResult, secondOperand);
            break;
    }
    return partialResult
}



const display = document.querySelector('.screen');
const clear = document.querySelector('.clear')
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const undo = document.querySelector('.undo');
let operand = [];
let operator = [];


buttons.forEach(button => button.addEventListener('click', showOnDisplay));
clear.addEventListener('click', clearDisplay);
operators.forEach(operator => operator.addEventListener('click', addOperator));
equal.addEventListener('click', getResult);
undo.addEventListener('click', deleteLastNumber);

