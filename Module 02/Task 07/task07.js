'use strict';

let no = 0;
const printDice = document.querySelector('#target');
const rollTimes = parseInt(prompt('How many sides does dice should have ? '));

function diceRoll(rolltimes) {
    return  Math.floor(Math.random() * rolltimes + 1);
}

while (true) {
    no = diceRoll(rollTimes);
    let li = document.createElement("li");
    li.textContent = no;
    printDice.appendChild(li);
    if (no === rollTimes) {
        break;
    }
}
