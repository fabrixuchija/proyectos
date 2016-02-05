/// <reference path="jquery-1.12.0.js" />

$(document).on('ready', function () {
    var as;
    $('#cantidad').keypress(function (e) {


        as = $('#cantidad').val();
        if (as > (12-$('.comprado').length)) {
            alert('a exedido el numero de asientos disponibles');
            as = 0;
        }

    });


    $('td').on('click', function () {
        if (!$(this).hasClass('comprado') && (as > $('.selected').length || $(this).hasClass('selected'))) {
            $(this).toggleClass('selected');
            
        }
    });

    $('#btnComprar').on('click', function () {
        if ($('td').hasClass('selected')) {

            $('td.selected').addClass('comprado');
            $('td.selected.comprado').removeClass('selected');

            as = 0;
        }
    });
});

