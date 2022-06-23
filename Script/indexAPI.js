const API_KEY = 'api_key=1149a7fe76ffb7a376a8e7cfe765afe3';

let filter = '/movie/now_playing';
let page = 1;

const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL_POPULAR = BASE_URL + filter + '?api_key=1149a7fe76ffb7a376a8e7cfe765afe3&language=en-US&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

AOS.init();

getMovies();
getPopularMovie(API_URL_POPULAR);

setInterval(getPopularMovie, 10000, API_URL_POPULAR)

function getMovies() {

    // https://api.themoviedb.org/3/movie/latest?api_key=1149a7fe76ffb7a376a8e7cfe765afe3&language=en-US&page=1

    let API_URL = BASE_URL + filter + '?api_key=1149a7fe76ffb7a376a8e7cfe765afe3&page=' + page;
    console.log(API_URL);
    fetch(API_URL).then(res => res.json()).then(data => {

        showMovies(data.results);

    })
}

let x = 0

function getPopularMovie(url) {
    fetch(url).then(res => res.json()).then(data => {
        showPopularMovie(data.results);
    })
}



function showPopularMovie(data) {

    let {title, id, backdrop_path} = data[x];
    x++;

    $('#banner_bg').append(
        `<img id="img_${x}" class="banner_img" src="${IMG_URL + backdrop_path}">`
    )
    $('#banner_movie_title').html(
        `
            <h1 id="h1_${x}">${title}</h1><br>
            <button id="button_${x}" onclick="toMovie(${id})"><i class="fas fa-ticket-alt"></i> Koop Ticket</button>
        `
    )

    let l = x -2;

    $(`#img_${l}`).add(`#h1_${l}`).add(`#button_${l}`).remove();

    console.log('changed banner');
}

function showMovies(data) {
    $('#main').html('');

    console.log(data);
    let time = 500;
    $.each(data, function(index, movie) {

        console.log(movie);
        const {poster_path, id} = movie;

        let movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =
            `
                <div class="movie_container" data-aos="fade-up" data-aos-duration="${time}" onclick="toMovie(this.id)" id="${id}">
                    <img class="movie_poster" src="${IMG_URL + poster_path}" >
                </div>
            `;
        time += 200;

        $('#main').append(movieEl);
    })
}

function toMovie(id) {
    window.location.href = 'detail.php?id=' + id;
}

$('.option').click(function () {

    let filterTitle = $('#title_filter');

    let options = this.classList;

    if (options[0] === 'trending') {
        filter = '/trending/movie/' + options[1];
        filterTitle.html('<i class="fas fa-sliders-h"></i> Nu<span>Trending!</span>');
        getMovies();
    }

    if (options[0] === 'upcoming') {
        filter = '/movie/upcoming';
        filterTitle.html('<i class="fas fa-sliders-h"></i> Verwachte<span>Films!</span>');
        getMovies();
    }

    if (options[0] === 'top_rated') {
        filter = '/movie/top_rated';
        filterTitle.html('<i class="fas fa-sliders-h"></i> Best<span>Beoordeeld!</span>');
        getMovies();
    }

    if (options[0] === 'now') {
        filter = '/movie/now_playing';
        filterTitle.html('<i class="fas fa-sliders-h"></i> Nu In De <span>Bioscoop!</span>');
        getMovies();
    }
})

// Page selector

$('#page_left').click(() => {
    if (page > 1) {
        page--;
        $('#page').text(page);
    } else {
        page = 1;
        $('#page').text(page);
    }
    getMovies();
})

$('#page_right').click(() => {
    page++;
    $('#page').text(page);
    console.log(page);
    getMovies();
})
