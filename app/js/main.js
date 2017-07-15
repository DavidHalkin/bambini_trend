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
});