let number1 = '';
let number2 = '';
let operator = '';
const btn = document.querySelectorAll('button');
const display = document.querySelector('#display');
const content = document.createElement('p');
content.classList.add('content');

function operate (number1, operator, number2){
    if (operator == '+'){
        add(number1, number2);
    } else if (operator == '-'){
        subtract(number1, number2);
    } else if (operator == 'x'){
        multiply(number1, number2);
    } else if (operator == '%'){
        divide(number1, number2)
    }
}

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

btn.forEach((button) => {
    button.addEventListener('click', () => {
        content.textContent = button.id
        display.appendChild(content)
    })
})