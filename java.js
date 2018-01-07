$(document).ready(function () {
    $(".nav_cv").click(function () {
        $("#portfoliomappe").slideUp("slow");
        $("#cv").slideDown("slow");

        $("html, body").animate({
            scrollTop: 750
        }, 900);


    });


    $(".nav_port").click(function () {
        $("#cv").slideUp("slow");
        $("#portfoliomappe").slideDown("slow");


        $("html, body").animate({
            scrollTop: 730
        }, 900);

    });


    $(".nav_forside").click(function () {
        $("#cv").show();
        $("#portfoliomappe").show();
        $("html, body").animate({
            scrollTop: 10
        }, 900);

    });



    $('.up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
