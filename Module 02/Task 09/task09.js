'use strict';

const someNumbers = [1,5,3,4,8,24,10,13];

function even(numbers) {
    const newList = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            newList.push(number);
        }
    }return newList;
}

const evenList = even(someNumbers)
document.querySelector('#target1').innerHTML = someNumbers;
document.querySelector('#target2').innerHTML = evenList;