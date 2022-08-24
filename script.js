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
    return a / b;
}

function operate(a, operator, b) {
    if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "+") {
        return add(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Wrong operator!";
    }
}


let numberButtons = document.querySelectorAll(".numberbutton");
let screen = document.querySelector('#screen');
let number = document.createTextNode('');
screen.appendChild(number);
let clear = document.querySelector('.clear');
let equal = document.querySelector(".equal");
let result;
let operatorButtons = document.querySelectorAll(".operator");
let operator;
let numbers = [];


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        if (parseFloat(screen.textContent) == result) {
            number.textContent = '';
            screen.textContent = '';
            numbers = [];
            screen.appendChild(number);
        }
        number.textContent += e.currentTarget.textContent;
    });
}



for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(e) {
        operator = e.currentTarget.textContent;
        if (parseFloat(screen.textContent) == result) {
            number.textContent = '';
            screen.textContent = '';
            screen.appendChild(number);
            console.log(operator);
            return operator;
        }
        numbers.push(screen.textContent);
        number.textContent = '';
        screen.appendChild(number);
        console.log(operator);
    });
}


clear.addEventListener('click', function() {
    operator = '';
    numbers = [];
    screen.innerHTML = '';
    number.textContent = '';
    screen.appendChild(number);
});


function calculate() {
    numbers.push(screen.textContent);
    // kod ponizej sprawia problemy z floatami - parseInt je zaokragla
    // https://www.codegrepper.com/code-examples/javascript/convert+array+to+integer+in+javascript
    // sprobuj zmienic metode dzialania tego kawalka - pozbadz sie parseInt
    let a = parseFloat(numbers[0]);
    let b = parseFloat(numbers[1]);
    console.log(a);
    console.log(b);
    console.log(operator);
    result = (operate(a, operator, b));
    screen.textContent = result;
    numbers = [];
    operator = '';
    numbers.push(result);
    console.log(result);
}


equal.addEventListener('click', calculate);