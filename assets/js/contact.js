$("#st1").click(function () {
    $(".fa-star").css('color', 'black');
    $("#st1").css('color', 'yellow')
    $("#review").text('Bad').css('color','red')

});
$("#st2").click(function () {
    $(".fs-star").css('color', 'black');
    $("#st1,#st2").css('color', 'yellow')
    $("#review").text('Good').css('color','red')

});
$("#st3").click(function () {
    $(".fs-star").css('color', 'black');
    $("#st1,#st2,#st3").css('color', 'yellow')
    $("#review").text('Very Good').css('color','blue')

});
$("#st4").click(function () {
    $(".fs-star").css('color', 'black');
    $("#st1,#st2,#st3,#st4").css('color', 'yellow')
    $("#review").text('Excellent').css('color','green')

});
$("#st5").click(function () {
    $(".fs-star").css('color', 'black');
    $("#st1,#st2,#st3,#st4,#st5").css('color', 'yellow')
    $("#review").text('Awesome').css('color','green')

});