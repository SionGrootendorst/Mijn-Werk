let title_filter = true;

$('#title_filter').click(function () {
    if (title_filter === true) {
        // verander naar height in px
        $('#filter_options').css('height', '136px');
        title_filter = false;
    } else {
        $('#filter_options').css('height', '0px');
        title_filter = true;
    }

})

