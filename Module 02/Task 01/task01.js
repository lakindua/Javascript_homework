'use strict';

const numbers = [];

for (let i = 1; i <= 5; i++) {
    const num = parseInt(prompt(`Enter the ${i} number`));
    numbers.push(num);
}

for (let i = 4; i > -1 ; i--) {
    console.log(numbers[i]);
}