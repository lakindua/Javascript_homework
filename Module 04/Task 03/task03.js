'use strict';

const tvSeries = document.querySelector('#tvshow');
const target = document.querySelector('#results');

tvSeries.addEventListener('submit', async function(evt){
    evt.preventDefault();

    const keyword = document.querySelector('input[name=q]').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
    const jsondata = await response.json();

    target.innerHTML = '';

    for (let series of jsondata) {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.innerText = series.show.name;

        const a = document.createElement('a');
        a.href = series.show.url;
        a.target = '_blank';
        a.innerText = 'For more information';

        const img = document.createElement('img');
        img.alt = series.show.name;
        img.src = series.show.image?.medium;

        const info = document.createElement('div');
        info.innerHTML = series.show.summary || 'No summary available';

        article.append(h2, a, img, info);
        target.appendChild(article);
    }
});

