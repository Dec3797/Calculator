let number1 = '';
let number2 = '';
let operator = '';
const numBtn = document.querySelectorAll('button');
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

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == '1' ||
        button.id == '2' ||
        button.id == '3' ||
        button.id == '4' ||
        button.id == '5' ||
        button.id == '6' ||
        button.id == '7' ||
        button.id == '8' ||
        button.id == '9' ||
        button.id == '0'){
            content.textContent = button.id
            display.appendChild(content)
        }
    })
})