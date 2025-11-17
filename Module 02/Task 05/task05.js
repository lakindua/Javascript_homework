'use strict';

let number;
const list = []

while (true) {
    number = parseInt(prompt('Enter a number'));
    if (list.includes(number)) {
        console.log(`Number ${number} has already in the list`);
        break;
    }
    else {
        list.push(number);
    }
}

const newList = list.sort((a,b) => a - b);
console.log(newList);