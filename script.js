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
let result = 0;
let operatorButtons = document.querySelectorAll(".operator");
let operator;
let numbers = [];


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        number.textContent += e.currentTarget.textContent;
    });
}



for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(e) {
        operator = e.currentTarget.textContent;
        if (parseInt(screen.textContent) == result) {
            number.textContent = '';
            screen.textContent = '';
            screen.appendChild(number);
            return operator;
        }
        numbers.push(screen.textContent);
        number.textContent = '';
        screen.appendChild(number);
    });
}


clear.addEventListener('click', function() {
    operator = '';
    numbers = [];
    number.textContent = '';
    screen.appendChild(number);
});


function calculate() {
    //funkcja zatrzymuje wynik z powodu kodu na dole numbers.push - wyczysc ekran
    numbers.push(screen.textContent);
    let a = parseInt(numbers[0]);
    let b = parseInt(numbers[1]);
    console.log(a);
    console.log(b);
    result = (operate(a, operator, b));
    screen.textContent = result;
    //dokoncz kalkulacje po otrzymaniu wyniku (kalkulacja na podstawie wyniku)
    numbers = [];
    operator = '';
    numbers.push(result);
    console.log(result);
}


equal.addEventListener('click', calculate);

