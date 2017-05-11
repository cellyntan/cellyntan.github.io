$(document).ready(function(){

  $('#tabmenu button').on('click', function() {
    $('#tabmenu button').removeClass('active');
    $(this).addClass('active');
    $(this).addClass('bounceIn');

  });

  $('#tabuiux').on('click', function() {
    $('.work').hide();
    $('.uiux').fadeIn();
  });

  $('#tabbranding').on('click', function() {
    $('.work').hide();
    $('.branding').fadeIn();
  });

  $('#tabvisual').on('click', function() {
    $('.work').hide();
    $('.visual').fadeIn();
  });

  $('#tabelse').on('click', function() {
    $('.work').hide();
    $('.else').fadeIn();
  });

  $('#contactmebutton').on('click', function() {
    $('#contactme').fadeIn();
  });

  $('#close').on('click', function() {
    $('#contactme').fadeOut();
  });

  $('#funfact').on('click', function() {
    $('#superpower').fadeIn();
    $('#funfact').hide();

  });

});

$(window).scroll(function() {
  var topOfOthDiv = $("#projects").offset().top;

    if ($(this).scrollTop() > topOfOthDiv) { //use `this`, not `document`
        $('.herotype').css({'display': 'none'});

        $('#headerbar').addClass('fadeInDown').css({'position':'fixed'});

    }
});

$(window).scroll(function() {
  var topOfOthDiv = $("#projects").offset().top;

    if ($(this).scrollTop() < topOfOthDiv) { //use `this`, not `document`
        $('.herotype').css({
            'display': 'block'
        });
    }
});
