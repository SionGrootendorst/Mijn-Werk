<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail pagina</title>
    <link rel="stylesheet" href="./Css/detail.css">
    <script src="https://kit.fontawesome.com/d56e6d1e10.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" defer></script>
    <script src="./Script/detail.js" defer></script>


</head>

<body>

    <div class="container">
        <header>
            <ul>
                <img class="logo2" src="./Images/logo2.png" alt="">
            </ul>
        </header>

        <div class="background"></div>

        <div class="body_background"></div>

        <div class="trailer_div">
            <div class="play_knop">
                <i class="fas fa-play"></i>
            </div>
        </div>

        <div class="content">

            <div class="voorkant_film">
                <div class="voorkant_cover"></div>
                <div class="info_cover"></div>
            </div>

            <div class="info_tickets">
                <p><i class="fas fa-check"></i>&nbsp; Tickets zijn enkel online verkrijgbaar</p>&nbsp;&nbsp;&nbsp;
                <p><i class="fas fa-check"></i>&nbsp; Tickets gemakkelijk te annuleren</p>&nbsp;&nbsp;&nbsp;
                <p><i class="fas fa-check"></i>&nbsp; Beste beeld en geluid</p>
            </div>

            <div class="rating_info_div">

                <!-- Info -->
                <div class="rating_info">

                    <div class="rating">
                        <p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </p>
                    </div>

                    <div class="IMDB"></div>

                    <div class="tijd"></div>

                    <div class="peggie">
                        <img src="./Images/peggie.png" alt="">
                    </div>

                    <div class="genres"></div>
                </div>

                <!-- Informatie over de film -->

                <div class="info_movie">
                    <div class="release"></div>
                    <div class="overview"></div>
                    <div class="extra_film"></div>
                </div>

            </div>

            <hr>

            <!-- Cast -->
            <div class="cast_info">
                <h4>CAST</h4>
                <div class="cast"></div>
            </div>

        </div>

        <!-- Video -->
        <div class="video">
            <div class="naam_trailer">
                <h1 class="trailer_naam">DOCTER STRANGE: MULTIVERSE</h1>
                <!-- Icon om video te sluiten -->
                <div class="icoon">
                    <i class="fas fa-times-circle"></i>
                </div>
            </div>
            <div class="trailer_video"></div>
        </div>


        <!-- Tijden -->
        <div class="tijden">
            <div class="tijden_h1">
                <h3>DATUM EN TIJDEN</h3>
                <i class="fas fa-times-circle" id="tijd_knop"></i>
            </div>
        </div>

    </div>
</body>

</html>