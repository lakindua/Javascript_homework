'use strict';

const answer = confirm('Should I calculate the square root?');
const output = document.querySelector('#test');

if (answer) {
    const number = parseInt(prompt('Enter a number:'));
    if (number < 0) {
        output.innerHTML = 'The square root of a negative number is not defined.';
    } else {
        const root = Math.sqrt(number);
        output.innerHTML = 'The square root is ' + root;
    }
} else {
    output.innerHTML = 'The square root is not calculated.';
}