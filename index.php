<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" integrity="sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==" crossorigin="anonymous" referrerpolicy="no-referrer" defer />


    <script src="Script/indexAPI.js" defer></script>
    <script src="Script/index.js" defer></script>
    <link rel="stylesheet" href="Css/index.css">
    <title>Bioscoop App</title>
</head>
<body>
<?php

include 'header.php';

?>

<div id="banner">
    <div id="banner_bg"></div>
    <div id="banner_movie_title"></div>
</div>

<h2 id="now_playing"><div id="title_filter" data-aos="fade-up">
        <i class="fas fa-sliders-h"></i> Nu in de<span>bioscoop!</span>
        </div><h4 id="page_selector"><i class="fas fa-arrow-left" id="page_left"></i> pagina <span id="page">1</span> <i class="fas fa-arrow-right" id="page_right"></i></h4></h2>

<div id="filter_options">
    <table id="filter_table">
        <tr>
            <th>Film</th>
            <th>Trending</th>
        </tr>

        <tr>
            <td class="top_rated option">Best beoordeeld</td>
            <td class="trending day option">Vandaag</td>

        </tr>
        <tr>
            <td class="upcoming option">Verwachte films</td>
            <td class="trending week option">Deze week</td>
        </tr>
        <tr>
            <td class="now option">Nu in de bioscoop</td>
        </tr>
    </table>
</div>
<main id="main">

</main>



</body>
</html>