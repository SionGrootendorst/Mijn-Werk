$(".play_knop").click(() => {
    $(".video").css("height", "1000px");
})

$(".icoon").click(() => {
    $(".video").css("height", "0px");
})

// API

const id = new URLSearchParams(window.location.search);
const id_film = id.get("id");

const API_KEY = 'api_key=1149a7fe76ffb7a376a8e7cfe765afe3';

const BASE_URL = 'https://api.themoviedb.org/3';

const IMG_URL = 'https://image.tmdb.org/t/p/original';



getMovies();
getMovieVideo();
getMovieCast()


// ----------------------------------------------------------------------------------------
function getMovies() {

    let API_URL = BASE_URL + '/movie/' + id_film + '?api_key=1149a7fe76ffb7a376a8e7cfe765afe3';
    fetch(API_URL).then(res => res.json()).then(data => {

        showMovies(data);

    })
}


function showMovies(data) {
    $('#main').html('');

    // Cover
    $('.voorkant_cover').html(`<img class="cover_foto" src="${IMG_URL + data.poster_path}" alt="">`);

    // Titel
    $('.info_cover').html(`<img class="logo" src="./Images/logo2.png" alt="">
        <h1>${data.title}</h1>
        <button class="kopen"><i class="fas fa-ticket-alt"></i>&nbsp;&nbsp;Koop tickets</button>`)

    // Tijdsduur
    $('.tijd').html(`<p class="time">${data.runtime} mintuten</p>`)

    // IMDB score
    $('.IMDB').html(`<p class="rate">${data.vote_average} (imdb)</p>`)

    // Release date
    $('.release').html(`<p>Release: ${data.release_date}</p>`)

    // Samenvatting
    $('.overview').html(`<p>${data.overview}</p>`)

    // Extra info
    $('.extra_film').html(`<p class="extra_info">EXTRA INFORMATIE</p>
        <p>${data.title} bevat verschillende reeksen met beelden en langdurige flitsende lichteffecten die invloed zouden kunnen hebben op mensen met lichtgevoelige epilepsie of een andere vorm van fotosensitiviteit.</p>`)

    // Background
    $('.background').html(`<img class="foto_background" src="${IMG_URL + data.backdrop_path}" alt="">`)

    // Trailer naam
    $('.trailer_naam').html(`${data.title}`)

    // Genres
    for (let i = 0; i < 3; i++) {
        $('.genres').append(`<button>${data.genres[i].name}</button>&nbsp;&nbsp;`)
    }


}



// ----------------------------------------------------------------------------------------
// Krijg de cast

function getMovieCast() {

    let API_URL_CAST = BASE_URL + '/movie/' + id_film + '/credits?api_key=1149a7fe76ffb7a376a8e7cfe765afe3';
    fetch(API_URL_CAST).then(res => res.json()).then(cast => {

        showMoviesCast(cast);

    })
}

function showMoviesCast(cast) {
    $('#main').html('');

    // Cast neerzetten
    for (let i = 0; i < 4; i++) {
        $('.cast').append(`<div class="persoon">
            <img src="${IMG_URL + cast.cast[i].profile_path}" alt="">
            <p class="naam_cast">${cast.cast[i].name}</p>
            <p class="role_name">(${cast.cast[i].character})</p>
            </div>`)
    }

}


// ----------------------------------------------------------------------------------------
// Functie om de trailers op te halen

function getMovieVideo() {

    let API_URL_VIDEO = BASE_URL + '/movie/' + id_film + '/videos?api_key=1149a7fe76ffb7a376a8e7cfe765afe3';

    fetch(API_URL_VIDEO).then(res => res.json()).then(video => {

        showMoviesVideo(video);

    })
}

function showMoviesVideo(video) {
    $('#main').html('');

    // Trailer
    $('.trailer_video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)


}


// ----------------------------------------------------------------------------------------
// Openen van de tijden

$('body').on("click", ".kopen", function () {
    if ($(window).width() < 615) {
        $('.tijden').css("width", "100%");
    } else {
        $('.tijden').css("width", "850px");
    }
});

$('body').on("click", "#tijd_knop", function () {
    $('.tijden').css("width", "0px");
});



// ----------------------------------------------------------------------------------------
// Datum ophalen van vandaag
const weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const month = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"];
let date = new Date();

console.log(date);

// Controleren welke dag we zitten
for (let i = 0; i < 7; i++) {

    // dag
    let dagen = date.getDay();
    console.log(dagen);
    let dag = weekday[date.getUTCDay() + i];
    let dagnummer = date.getUTCDate() + i;

    // Maand
    let maand = month[date.getMonth()];
    let maandnummer = date.getUTCMonth() + 1;

    // Jaar
    let jaar = date.getFullYear();

    $('.tijden').append(
        `<div class="tijden_dag">
            <h3>${dag + " " + dagnummer + " " + maand}</h3>
            <div class="tijd_uitzoeken">

                <a href="./stoel.php?filmId=${id_film}&dagnummer=${dagnummer}&soortZaal=2D&zaalNummer=${(i + 1)}&tijd=10:00&datum=${jaar + "-" + maandnummer + "-" + dagnummer}">
                <div class="dagen" id="${dagnummer}">
                    <h4>${"Zaal " + (i + 1)}</h4>
                    <p>10:00 - 12:15</p>
                    <div class="soort_film" id="twee">
                    <p>2D</p>
                    </div>
                </div>
                </a>

                <a href="./stoel.php?filmId=${id_film}&dagnummer=${dagnummer + 1}&soortZaal=3D&zaalNummer=${(i + 2)}&tijd=12:30&datum=${jaar + "-" + maandnummer + "-" + (dagnummer)}">
                <div class="dagen" id="${dagnummer + 1}">
                    <h4>${"Zaal " + (i + 2)}</h4>
                    <p>12:30 - 14:45</p>
                    <div class="soort_film" id="drie">
                    <p>3D</p>
                    </div>
                </div>
                </a>

                <a href="./stoel.php?filmId=${id_film}&dagnummer=${dagnummer + 2}&soortZaal=dolby&zaalNummer=${(i + 3)}&tijd=15:00&datum=${jaar + "-" + maandnummer + "-" + (dagnummer)}">
                <div class="dagen" id="${dagnummer + 2}">
                    <h4>${"Zaal " + (i + 3)}</h4>
                    <p>15:00 - 17:15</p>
                    <div class="soort_film" id="dolby">
                    <p>DOLBY</p>
                    </div>
                </div>
                </a>

                <a href="./stoel.php?filmId=${id_film}&dagnummer=${dagnummer + 3}&soortZaal=4DX&zaalNummer=${(i + 4)}&tijd=18:00&datum=${jaar + "-" + maandnummer + "-" + (dagnummer)}">
                <div class="dagen" id="${dagnummer + 3}">
                    <h4>${"Zaal " + (i + 4)}</h4>
                    <p>18:00 - 20:15</p>
                    <div class="soort_film" id="vier">
                    <p>4DX</p>
                    </div>
                </div>
                </a>

                <a href="./stoel.php?filmId=${id_film}&dagnummer=${dagnummer + 4}&soortZaal=imax&zaalNummer=${(i + 5)}&tijd=20:30&datum=${jaar + "-" + maandnummer + "-" + (dagnummer)}">
                <div class="dagen" id="${dagnummer + 4}">
                    <h4>${"Zaal " + (i + 5)}</h4>
                    <p>20:30 - 22:15</p>
                    <div class="soort_film" id="imax">
                    <p>IMAX</p>
                    </div>
                </div>
                </a>

            </div>
        </div>`);

}



// ----------------------------------------------------------------------------------------
// Alles in een sessie zetten voor stoel pagina





