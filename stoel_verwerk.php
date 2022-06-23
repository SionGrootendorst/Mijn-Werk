<?php

include 'ticketClass.php';



if (isset($_POST['submitTicket'])) {
    header('Location: index.php');
    $filmId = $_POST['filmId'];
    $tijd = $_POST['tijd'];
    $zaal = $_POST['zaalNummer'];
    $datum = $_POST['datum'];
    $email = $_POST['email'];
    $stoel = $_POST['ticketid'];
    $ticketsPrijs = $_POST['ticketsPrijs'];

    echo $filmId . '<br>' . $tijd . '<br>' . $zaal . '<br>' . $datum ;

    for ($i = 0; $i < count($ticketsPrijs); $i++) {
        $db->insertTickets($email, $stoel[$i], $filmId, $ticketsPrijs[$i], $tijd, $datum, $zaal);
    }
    echo '<br> fgdfdggfhgfh' . $ticketsPrijs;

}

if (isset($_POST['filmId'])) {

    $filmId = $_POST['filmId'];
    $tijd = $_POST['tijd'];
    $zaal = $_POST['zaalNummer'];
    $datum = $_POST['datum'];

    $stoelen = $db->getGereserveerdeStoelen($filmId, $datum, $tijd, $zaal);

    echo json_encode($stoelen);

    header('Location: index.php');


}