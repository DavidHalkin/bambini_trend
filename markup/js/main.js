$(document).ready(function(){
    $(".etc-nav .search-ico a").click(function(){
    	$(this).parent().toggleClass("active");
        $(this).parent().find('.drop-cont').slideToggle("fast");
        return false;
    });
    $(".btn-mob").click(function(){
    	$(this).toggleClass("active");
        $('.main-nav-mob-holder').slideToggle("fast");
    });

    $('.top-carousel').owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'zoomIn',
		items:1,
		margin:0,
		stagePadding:0,
		nav: true,
		smartSpeed:450
	});

});
    $(".seo-txt").showMore({
      minheight: 145, // measured in px
      buttontxtmore: 'Подробнее',
      buttontxtless: 'Скрыть',
      buttoncss: 'btn btn-seo',
      animationspeed: 750
    });