'use strict';

let no = 0;
const printDice = document.querySelector('#target');

function diceRoll() {
    return  Math.floor(Math.random() * 6 + 1);
}

while (true) {
    no = diceRoll();
    let li = document.createElement("li");
    li.textContent = no;
    printDice.appendChild(li);
    if (no === 6){
        break;
    }
}
