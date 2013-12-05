$(function(){
    $('#mobile_logo').hide();
    $('.custom-style').hide();
    $('.mobile_text').hide();
    $("#xsmenu li").each(function(index) {
        $(this).css('opacity',0).animate({'marginLeft': '150%' });
    });
    $('#mob_footer').hide();
    setTimeout(function () {
        $('#mobile_logo').fadeIn(3000);
        $('#mobile_logo').css({
            marginTop:  '50%'
        });
        $('#mobile_logo').animate({'marginTop': '3%' }, 1000);
    },2000,setTimeout(function(){
        $('.custom-style').fadeIn(1000);
        $('.mobile_text').fadeIn(1000);
    },6000,setTimeout(function(){
        $("#xsmenu li").each(function(index) {
            $(this).delay(800*index).animate({'marginLeft': '7%' },500).css('opacity',1);
        });
    },7000,setTimeout(function(){
        $('#mob_footer').fadeIn(3000);
    },9000))));
});