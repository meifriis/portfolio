$(document).ready(function () {

    $(".nav_cv").click(function () {
        $("#portfoliomappe").hide();
        $("#cv").show();

        $("html, body").animate({
            scrollTop: 600
        }, 900);


    });



    $(".nav_port").click(function () {
        $("#cv").hide();
        $("#portfoliomappe").show();


        $("html, body").animate({
            scrollTop: 560
        }, 900);

    });



    $(".nav_forside").click(function () {
        $("#cv").slideUp("slow");
        $("#portfoliomappe").slideUp("slow");
    });





});
