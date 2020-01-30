$(document).ready(function () {

    $("#btnPortfolio").on("click", function () {
        var posicion = $("#Portfolio").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 900);
    });

});