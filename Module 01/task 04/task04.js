'use strict';

const number = Math.floor(Math.random() * 4+1);
const name = prompt('Enter your name');


if (number === 1) {
    document.querySelector('#harry').innerHTML = `${name} , you are Gryffindor`;
}
else if (number === 2) {
    document.querySelector('#harry').innerHTML = `${name} , you are Slytherin`;
}
else if (number === 3) {
    document.querySelector('#harry').innerHTML = `${name} , you are Hufflepuff`;
}
else {
    document.querySelector('#harry').innerHTML = `${name} , you are Ravenclaw`;
}