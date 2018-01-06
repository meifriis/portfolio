$(document).ready(function () {

    $(".nav_cv").click(function () {
        $("#portfoliomappe").slideUp("slow");
        $("#cv").slideDown("slow");

        $("html, body").animate({
            scrollTop: 580
        }, 900);


    });



    $(".nav_port").click(function () {
        $("#cv").slideUp("slow");
        $("#portfoliomappe").slideDown("slow");


        $("html, body").animate({
            scrollTop: 580
        }, 900);

    });



    $(".nav_forside").click(function () {
        $("#cv").slideUp("slow");
        $("#portfoliomappe").slideUp("slow");

        $("html, body").animate({
            scrollTop: 10
        }, 900);




    });





});
