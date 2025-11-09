'use strict';

let startYear = parseInt(prompt('Enter the starting year'));
let endYear = parseInt(prompt('Enter the ending year'));

const list = document.querySelector('#list');

for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    let li = document.createElement('li');
    li.textContent = year;
    list.appendChild(li);
    }
}
