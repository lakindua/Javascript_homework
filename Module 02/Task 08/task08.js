'use strict';

const names = ['John','Richard','Ben','Randy'];

function concat(somethings) {
    let test = '';
    for (const something of somethings) {
        test = test + something;
    }return test;
}

const nameList = concat(names)
document.querySelector('#target').innerHTML = nameList;