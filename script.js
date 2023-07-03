let number1 = '';
let number2 = '';
let operator = '';
const numBtn = document.querySelectorAll('button');
const display = document.querySelector('#display');
const content = document.createElement('p');
content.classList.add('content');
let displayValue = '';

function operate (number1, operator, number2){
    if (operator == '+'){
        return number1 + number2;
    } else if (operator == '-'){
        return number1 - number2;
    } else if (operator == 'x'){
        return number1 * number2;
    } else if (operator == '%'){
        if(number1 == 0 && number2 == 0){
            return 'Please don\'t try and break me :('
        } else {
            return number1 / number2;
        }
    }
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
            displayValue = button.id
        }
    })
})