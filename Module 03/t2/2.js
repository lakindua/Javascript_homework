'use strict';

const list = document.querySelector('#target');

const items = ['First item','Second item','Third item'];

for (let item of items) {
    let li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
}

list.classList.add('my-item');