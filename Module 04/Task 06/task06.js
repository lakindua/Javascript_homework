'use strict';

const form = document.querySelector('#jokeform');
const results = document.querySelector('#jokeprint');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const keyword = document.querySelector('input[name=q]').value;
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${keyword}`);
    const jsondata = await response.json();
    results.innerHTML = '';

    const article = document.createElement('article');
    const para = document.createElement('p');
    para.textContent = jsondata.result[0]?.value || 'No jokes found.';

    article.appendChild(para);
    results.appendChild(article);
})