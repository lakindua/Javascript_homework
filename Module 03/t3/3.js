'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.querySelector('#target');

for (let name of names) {
    let li = `<li>${name}</li>`;
    list.innerHTML += li;
}
