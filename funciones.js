$(document).ready(function(){

    $("#btnPortfolio").on("click", function(){
        var posicion = $("#Portfolio").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 900); 
    });

    $("#btnContratame").on("click", function(){
        var posicion = 1200.875;
        console.log(posicion);
        $("html, body").animate({
            scrollTop: posicion
        }, 900); 
    });

    $("#btnServicios").on("click", function(){
        var posicion = $("#Servicios").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 900); 
    });
});