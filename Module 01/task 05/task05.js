'use strict';

const year = parseInt(prompt('Please enter the year'));

if (year%400 === 0 ) {
    document.querySelector('#target').innerText = `${year} is a leap year`;
}
else  if (year%100 === 0) {
    document.querySelector('#target').innerText = `${year} is not a leap year`;
}
else if (year%4 === 0 ) {
    document.querySelector('#target').innerText = `${year} is a leap year`;
}
else {
    document.querySelector('#target').innerText = `${year} is not a leap year`;
}
