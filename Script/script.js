const API_KEY = 'api_key=1149a7fe76ffb7a376a8e7cfe765afe3';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/now_playing?api_key=1149a7fe76ffb7a376a8e7cfe765afe3&language=en-US&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {

    data.forEach(movie => {
        const {title, poster_path, adult, video} = movie;
        let movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =
            `
                <img src="${IMG_URL + poster_path}" >
                <h5>${title}</h5>
            `;
        document.getElementById('main').append(movieEl);
    })
}





