'use strict';

const diceCount = parseInt(prompt('How many dice do you want to roll?'));
const userSum = parseInt(prompt('What sum are you looking for?'));

const repetitions = 10000;
let count = 0;

for (let i = 0; i < repetitions; i++) {

    let sum = 0;
    for (let d = 0; d < diceCount; d++) {
        let value = Math.floor(Math.random() * 6) + 1;
        sum += value;
    }

    if (sum === userSum) {
        count++;
    }
}

let probability = (count / repetitions) * 100;

document.querySelector('#task10').innerHTML =
    `Probability to get sum ${userSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;