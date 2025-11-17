'use strict';

const button = document.querySelector('#start');
const result = document.querySelector('#result');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const option = document.querySelector('#operation');

button.addEventListener('click', function() {
    const a = Number(num1.value);
    const b = Number(num2.value);
    const op =  option.value;

    let answer;

    if (op === "add") {
        answer = a + b;
    }else if (op === "sub") {
        answer = a - b;
    }else if (op === "multi") {
        answer = a * b;
    }else {
        answer = b !== 0 ? a / b : "Cannot divide by zero";
    }

    result.innerHTML = answer;
})