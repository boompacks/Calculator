function add(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) + parseInt(b)
    }
    return "You can only insert numbers"
}


function subtract(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        let prova =parseInt(a) - parseInt(b)
        return prova
    }
    return "You can only insert numbers"
}


function multiply(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) *parseInt(b)
    }
    return "You can only insert numbers"
}


function divide(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) / parseInt(b)
    }
    return "You can only insert numbers"
}


function clearDisplay(){
    display.textContent = "0";
    pressedButtons = [];
}


function showOnDisplay(e){
    if (display.textContent == "0") display.textContent = "";
    display.textContent += this.textContent;
    pressedButtons.push(this.textContent);
}


function addOperator(e){
    if (display.textContent != "0") display.textContent = "0";
    pressedButtons.push(this.textContent);
}


function getResult(){
    while (pressedButtons.length){
        let partialResult = operate()
    }
    display.textContent = result;
}


function operate(){
    let firstOperand = pressedButtons.shift(),
        operator = pressedButtons.shift(),
        secondOperand = pressedButtons.shift();
        

    switch(operator){
        case "+":
            result += add(firstOperand, secondOperand);
            break;
        case "-":
            result -= subtract(firstOperand, secondOperand);
            break;
        case "/":
            result /= multiply(firstOperand, secondOperand);
            break;
        case "*":
            result *= divide(firstOperand, secondOperand);
            break;
    }
    return result
}


const display = document.querySelector('.screen');
const clear = document.querySelector('.clear')
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal')
let pressedButtons = [];
let result = 0;


buttons.forEach(button => button.addEventListener('click', showOnDisplay))
clear.addEventListener('click', clearDisplay)
operators.forEach(operator => operator.addEventListener('click', addOperator))
equal.addEventListener('click', getResult)

// Il problema attualmente è che non mi torna i risultati parziali
// in più alcune operazioni non funzionano correttamente perché il result parte da zero, e quindi sottraendo il risultato a quello si ottiene un errore