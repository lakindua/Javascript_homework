'use strict';

const tvSeries = document.querySelector('#tvshow');

tvSeries.addEventListener('submit' , async function(evt){
    evt.preventDefault();
    const keyword = document.querySelector('input[name=q]').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
    const json = await response.json();
    console.log(json);
})

