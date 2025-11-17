'use strict';

const form = document.querySelector('#source');
const fName = document.querySelector('input[name="firstname"]');
const lName = document.querySelector('input[name="lastname"]');
const result = document.querySelector('#target');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    result.innerHTML = `Your name is ${fName.value} ${lName.value}`;
})