$(document).ready(function(){

	$(window).scroll(function(){
		const headerNav = $(".header-row").outerHeight();
		const headerSection = $(".header-section").outerHeight();
		const totalOffset = headerNav + headerSection;
			if ($(window).scrollTop() >= totalOffset) {
				$(".fixed-header").addClass("fixed-header-show");
			}
			else{
				$(".fixed-header").removeClass("fixed-header-show");
			}
	});


	$(".slideshow").slick({
		autoplay: true,
		arrows: false,
		speed: 1000
  	});

	$("#left-arrow").click(function(){
		$(".slideshow").slick("slickPrev");
	});

	$("#right-arrow").click(function(){
		$(".slideshow").slick("slickNext");
	});

	$(".ai-font-menu").click(function(){
		$(".mobile-menu").slideToggle();
	});

});


$(document).ready(function(){

	$(".fp-cont").slick({
		 infinite: true,
		 arrows: false,
		 speed: 400,
		 slidesToShow: 4,
		 slidesToScroll: 1,
		 responsive: [{
		 	breakpoint: 992,
		 	settings: {
		 		slidesToShow: 1,
		 		slidesToScroll: 1,
		 		infinite: true
		 	}
		 }]
	});

	$("#fp-slick-left").click(function(){
		$(".fp-cont").slick("slickPrev");
	})
	$("#fp-slick-right").click(function(){
		$(".fp-cont").slick("slickNext");
	})

	$("#mqs-dropdown").click(function(){
		$(".mqs-dropdown-s").toggle();
	})


});