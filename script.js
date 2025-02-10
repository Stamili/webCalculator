function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b != 0)
    return a / b;
    else
    return "Can't divide by 0!";   
}

let num1 = '';
let operator = '';
let num2 = '';

function operate(num1, operator, num2) {
    if (operator === '+')
        return add(num1, num2)
    else if (operator === '-')
        return subtract(num1, num2)
    else if (operator === 'x')
        return multiply(num1, num2)
    else if (operator === '÷')
        return divide(num1, num2)
}

const displayScreen = document.querySelector("#displayScreen");
displayScreen.textContent = '0';
const buttons = document.querySelector("#buttons");

buttons.addEventListener('click', function(e) {
    const button = e.target;
    const buttonText = button.textContent;

    switch (button.className) {
        case 'clear':
            num1 = '';
            operator = '';
            num2 = '';
            displayScreen.textContent = '0';
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            operator = buttonText;
            displayScreen.textContent = buttonText;
            break;
        case 'equal':
            if (num1 && operator && num2) {
                let result = operate(parseFloat(num1), operator, parseFloat(num2));
                if (typeof result === 'number')
                result = result % 1 === 0 ? result : parseFloat(result.toFixed(4));
                displayScreen.textContent = result;
                num1 = result.toString();
                operator = '';
                num2 = '';
            }
            break;
        case 'backspace':
            if (displayScreen.textContent === num1) {
                num1 = num1.slice(0, -1);
                if (num1.length != 0) {
                    displayScreen.textContent = num1;
                } else {
                    displayScreen.textContent = '0';
                }
            }
            else if (displayScreen.textContent === num2) {
                num2 = num2.slice(0, -1);
                if (num2.length != 0) {
                    displayScreen.textContent = num2;
                } else {
                    displayScreen.textContent = '0';
                }
            }
            break;
        case 'dot': 
            if (displayScreen.textContent === num1 && !(num1.includes('.'))) {
                num1 += buttonText;
                displayScreen.textContent = num1;
            } else if (displayScreen.textContent === num2 && !(num2.includes('.'))) {
                num2 += buttonText;
                displayScreen.textContent = num2;
            }
            break;
        default:
            if (operator) {
                num2 += buttonText;
                displayScreen.textContent = num2;
            } else {
                num1 += buttonText;
                displayScreen.textContent = num1;
            }
    }

    }
)