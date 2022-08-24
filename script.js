//Bug to fix - calculator does not allow to remove digits after dot. Then again, is it really a bug? 

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
        return "Wrong input/operator!";
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
let dot = document.querySelector(".dot");


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        if (parseFloat(screen.textContent) == result) {
            number.textContent = '';
            screen.textContent = '';
            numbers = [];
            screen.appendChild(number);
        }

        if (screen.textContent.includes(".")) {
            screen.textContent +=e.currentTarget.textContent;
            return;
        }
        screen.textContent += e.currentTarget.textContent;
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
        screen.textContent = '';
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
    let a = parseFloat(numbers[0]);
    let b = parseFloat(numbers[1]);
    if (operator == '/' && b == 0) {
        screen.textContent = 'HOW COULD YOU!';
        return;
    } 
    result = (operate(a, operator, b));
    result = result.toFixed(2);
    screen.textContent = result;
    numbers = [];
    operator = '';
    numbers.push(result);
    console.log(result);
}


equal.addEventListener('click', calculate);

backspace.addEventListener('click', () => {
    screen.textContent = (screen.textContent).slice(0, -1);
});


dot.addEventListener('click', () => {
    if (screen.textContent.includes(".") || number.textContent.includes('.')) {
        dot.disabled = true;
    }
    screen.textContent = screen.textContent + '.';
})
