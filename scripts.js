function add(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) + parseInt(b)
    }
    return "You can only insert numbers"
}


function subtract(a, b){
    if (!isNaN(parseInt(a)) &&  !isNaN(parseInt(b))){
        return parseInt(a) - parseInt(b)
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

console.log(add(4, "4"));
console.log(subtract(4, "4"));
console.log(multiply(4, "4"));
console.log(divide(4, "4"));