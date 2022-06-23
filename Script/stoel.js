ticketArray = [];

const filmIdA = new URLSearchParams(window.location.search);
const id_film = filmIdA.get("filmId");

const API_KEY = 'api_key=1149a7fe76ffb7a376a8e7cfe765afe3';

const BASE_URL = 'https://api.themoviedb.org/3';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

getMovies();

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
    $('.foto_film').append(`<img src="${IMG_URL + data.poster_path}" alt="">`);

}

getPoster();

// ----------------------------------------------------------------------------------------
function getPoster() {

    let API_URL = BASE_URL + '/movie/' + id_film + '?api_key=1149a7fe76ffb7a376a8e7cfe765afe3';
    fetch(API_URL).then(res => res.json()).then(data => {

        showPoster(data);

    })
}


function showPoster(data) {
    $('#stoel_bg').attr('src', `${IMG_URL + data.backdrop_path}`);
}

$('.box').click(function () {
    let id = $(this).attr('id');



    $(this).toggleClass("selected");

    $(".ticketKoop").addClass("fadeTicketKnop");

// ticket toeveogen aan arrray
    if (ticketArray.includes(id)) {
        let index = ticketArray.indexOf(id);
        ticketArray.splice(index, 1);
    } else {
        if (ticketArray.includes(id)) {

        } else {
            ticketArray.push(id);
        }
    }

// ticket counter laten zien
    let ticketAmount = ticketArray.length;
    $('#ticketsAantal').text('Tickets aantal: ' + ticketAmount)

    console.log(ticketArray);
    if ($(".box").hasClass('selected')) {
    } else {
        $(".ticketKoop").removeClass("fadeTicketKnop");
    }
});

$('.button-28').click(() => {
    $('.container-ticketsKopenForm').css('height', 750);
    $('.ticketsZien').css('display', 'block');

    $('#optionTickets').html('');

    for (let i = 0; i < ticketArray.length; i++) {
        $('#optionTickets').append(
            `<tr><td><select name="ticketsPrijs[]" id="selectTicket"><option value="9">Kinder ticket 9€</option><option value="15">Volwassene ticket 15€</option></select></td></tr>` +
            `<tr><td><input type="hidden" name="ticketid[]" value="${ticketArray[i]}"></td></tr>`
        )
    }
});

$('.ticketsZien').click(() => {
    $('.container-ticketsKopenForm').css('height', 0);
    $('.ticketsZien').css('display', 'none');
});

$('.button-Hide').click(() => {
    $('.container-ticketsKopenForm').css('height', 0);
    $('.ticketsZien').css('display', 'none');
});

const id = new URLSearchParams(window.location.search);
let filmId = id.get("filmId");
let zaalNummer = id.get("zaalNummer");
let datum = id.get("datum");
let tijd = id.get("tijd");


$.post('stoel_verwerk.php', {
        'filmId': filmId,
        'zaalNummer': zaalNummer,
        'tijd': tijd,
        'datum': datum
    }, function (data) {

        data = JSON.parse(data);
        let box = $('.box');

        for (let i = 0; i < data.length; i++) {

            box.each(function() {

                if (data[i].stoel === $(this).attr('id')) {
                    let id = $(this).attr('id');
                    $('#' + id).removeClass('box');
                    $('#' + id).addClass('taken');
                }

            } )
        }
    }
)


$('.close').click(() => {
    window.location.href = 'index.php';
})


// Foto tonen van ticket
$(".opties_knop").click(() => {
    $(".banken").css("height", "50px");
})

$(".ing").click(() => {
    $(".rikrol").css("display", "block");
})

$(".rabobank").click(() => {
    $(".rikrol").css("display", "block");
})

$(".abn").click(() => {
    $(".rikrol").css("display", "block");
})

$(".asn").click(() => {
    $(".rikrol").css("display", "block");
})

$(".triodos").click(() => {
    $(".rikrol").css("display", "block");
});