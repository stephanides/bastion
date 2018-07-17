$('.count').each(function () {
	console.log("malo by");
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(function(){
    $(".fancybox").fancybox({
          'cyclic': true,
          arrows : true,
          infobar: true,
          protect: true,
          loop: true,
          animationEffect:"zoom-in-out"
      });

      
      $(".zoom").hover(function(){
      
      $(this).addClass('transition');
    }, function(){
          
      $(this).removeClass('transition');
    });
  });

function goAdvantages(){
	$('html, body').animate({scrollTop:$("#advantages").position().top - 88}, 'slow');
}