'use strict';

const list = [];
const printList = document.querySelector('#target');

for (let i = 1; i <= 6  ; i++) {
    const name = prompt(`Enter the ${i} dog's name`);
    list.push(name);
}

const newList= list.sort().reverse();

for (let i = 0; i < list.length; i++) {
    let li = document.createElement('li');
    li.textContent = newList[i];
    printList.appendChild(li);
}