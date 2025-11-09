'use strict';

const no1 = parseInt(prompt("Enter your first number?"));
const no2 = parseInt(prompt("Enter your second number?"));
const no3 = parseInt(prompt("Enter your third number?"));

const sum = no1+no2+no3, product = no1*no2*no3 , average = (no1+no2+no3)/3


document.querySelector("#target").innerText = `Sum - ${sum} \n Product - ${product} \n Average - ${average} `;