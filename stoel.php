<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reserveren</title>
    <link rel="stylesheet" href="Css/stoel.css">
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" defer>-->

</head>
<body>

<?php
include 'header.php';
include 'ticketClass.php';

?>

<img id="stoel_bg" src="Img/doctor.jpeg">
<div class="body_background"></div>

<h1 id="stoel_title">Kies uw <span>zitplaatsen</span></h1>

<div class="container">
    <div id="anuleren"><button type="button" class="close" id="button-Hide"><i class="fas fa-times"></i></button></div>
    <div id="grid" class="grid-layout">

        <?php
        for ($i = 1; $i < 114; $i++) {
            ?>
            <div id="<?= $i; ?>" class="box">

<!--                <p class="p_stoel">--><?//= $i ?><!--</p>-->

            </div>
            <?php
        }
        ?>
    </div>

    <div class="doek"><hr id="hr_doek"></div>
</div>

<div class="container-ticketKoop">
    <div class="ticketKoop">
        <button type="button" class="button-28" role="button" id="#">Koop Tickets</button>
    </div>
</div>


<div class="container-ticketsKopenForm">
    <div class="ticketInfo">
        <button type="button" class="button-Hide" id="button-Hide">X</button>
        <div class="ticketContainer">

            <div class="foto_film">

            </div>

            <div class="info_betalen">

                <form action="stoel_verwerk.php" method="post" id="ticketForm">

                    <input type='hidden' name='filmId' value='<?= $_GET["filmId"] ?>' />
                    <input type='hidden' name='zaalNummer' value='<?= $_GET["zaalNummer"] ?>' />
                    <input type='hidden' name='tijd' value='<?= $_GET["tijd"] ?>' />
                    <input type='hidden' name='datum' value='<?= $_GET["datum"] ?>' />

                    <h1>Tickets Kopen</h1>

                    <p id="ticketsAantal"></p>

                    <label for="email">Email:</label><br>
                    <input type="email" name="email">

                    <p id="optionTickets"></p>

                    <button type="submit" name="submitTicket" class="SubmitButton" role="button">Koop Tickets
                    </button>

                </form>

                <div class="betaal">
                    <h1>Betaal gegevens</h1>

                    <div class="betalen">
                        <h3>Selecteer betaalmethode</h3>
                        <hr class="hr1">
                        <input type="radio" id="html" name="fav_language" value="HTML">
                        <label for="html">
                            <img class="betaal_img visa" src="./Img/Visa_Logo.png" alt="">
                            <img class="betaal_img master" src="./Img/mastercard.png" alt="">
                        </label><br>

                        <hr class="hr">
                        <input type="radio" id="css" name="fav_language" value="CSS">
                        <label for="css">
                            <img class="betaal_img paypal" src="./Img/PayPal.svg.png" alt="">
                        </label><br>

                        <hr class="hr">

                        <input class="google_input" type="radio" id="javascript" name="fav_language" value="JavaScript">
                        <label for="javascript">
                            <img class="betaal_img google" src="./Img/Google-Play-logo.png" alt="">
                        </label>

                        <hr class="hr laatste">

                        <input class="ideal_input" type="radio" id="ideall" name="fav_language" value="JavaScript">
                        <label for="ideall">
                            <img class="betaal_img ideal" src="./Img/ideal.png" alt="">
                            <div class="opties_knop">
                                <p>Selecteer bank</p>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </label>

                        <div class="banken">
                            <div class="ing">
                                <img src="./Img/ING.png" alt="">
                            </div>
                            <div class="abn">
                                <img src="./Img/ABN.png" alt="">
                            </div>
                            <div class="rabobank">
                                <img src="./Img/RABO.jpg" alt="">
                            </div>
                            <div class="asn">
                                <img src="./Img/ASN.png" alt="">
                            </div>
                            <div class="triodos">
                                <img src="./Img/TRIO.png" alt="">
                            </div>
                        </div>

                        <div class="rikrol">
                            <h3>Scan om te betalen</h3>
                            <img src="./Img/rikrol.png" alt="">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="ticketsZien">

</div>


<script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" defer></script>
<link rel="stylesheet" href="css/beheer.css">
<script src="https://kit.fontawesome.com/d56e6d1e10.js" crossorigin="anonymous"></script>
<script src="Script/stoel.js" defer></script>
</body>
</html>