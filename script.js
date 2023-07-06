const display = document.querySelector('#display');
const displayValue = '';
const numBtns = document.querySelector('#numberButtons');
const opBtns = document.querySelector('opertaorButtons');
const displayBtns = document.querySelector('#topButtons')

function add(number1, number2){
    return number1 + number2
}

function subtract(number1, number2){
    return number1 - number2
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1, number2){
    return number1 / number2
}

function operate(number1, operand, number2){
    if (operand == '+'){
        return add(number1, number2)
    } else if(operand == '-'){
        return subtract(number1, number2)
    } else if(operand == '*'){
        return multiply(number1, number2)
    } else if(operand == '/'){
        return divide(number1, number2)
    }
}

