'use strict';

let number;
const list = []

while (true) {
    number = parseInt(prompt('Enter a number'));
    if (number === 0) {
        break;
    }
    list.push(number);
}

const newList = list.sort((a,b) => b - a);
console.log(newList);