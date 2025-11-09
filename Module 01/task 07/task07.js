'use strict';

const times = parseInt(prompt('How many times dice should be rolled'));

let noOfTimes = 0;
let sum = 0;
let value = 0;

while (noOfTimes <= times) {
    value = Math.floor(Math.random() * 6 + 1);
    sum = sum + value;
    noOfTimes += 1;
}
document.querySelector('#task7').innerHTML = `Sum is ${sum} `;