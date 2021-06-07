$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }),{
        offset:'60px;'
    }
});
/*$(document).ready(function() {

    $('ul#navigation li').click(function(){
        var number = $(this).index();
        $('.sec').hide().eq(number).show();
        $(this).toggleClass('active inactive');
        $('ul#navigation li').not(this).removeClass('active').addClass('inactive');
    });
     
    $('.sec').not(':first').hide();
    
    });*/
/*$(document).ready(function(){
    $('nav a').click(function(){
        var dest=$(this).attr('href');
        $('div.content').fadeOut();
        $(dest).fadeIn();
    return false;
    })
})*/
$('.js--nav-icon').click(function(){
    var nav=$('.js--main-nav');
    var icon=$('.js--nav-icon i');
    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }
    else{
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    };
});