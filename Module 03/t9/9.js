'use strict';

const input = document.querySelector('#calculation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');



button.addEventListener('click', function () {
    const expr = input.value.trim();
    let operator;

    if (expr.includes('+')) {
        operator = '+';
    } else if (expr.includes('-')) {
        operator = '-';
    } else if (expr.includes('*')) {
        operator = '*';
    } else if (expr.includes('/')) {
        operator = '/';
    } else {
        result.innerHTML = 'Invalid expression';
        return;
    }

    const numbers = expr.split(operator);
    const num1= Number(numbers[0]);
    const num2 = Number(numbers[1]);

    let answer;

    if (operator === "+") {
        answer = num1 + num2;
    }else if (operator === '-') {
        answer = num1 - num2;
    }else if (operator === '*') {
        answer = num1 * num2;
    }else {
        answer = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }

    result.innerHTML = answer;
});


