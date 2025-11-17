'use strict';

const noOfPeople = parseInt(prompt('How many people attending to the event'));
const list = [];
const printList = document.querySelector('#target');

for (let i = 1; i <= noOfPeople  ; i++) {
    const name = prompt(`Enter the person ${i} person name`);
    list.push(name);
}

const newList= list.sort();

for (let i = 0; i < list.length; i++) {
    let li = document.createElement('li');
    li.textContent = newList[i];
    printList.appendChild(li);
}

