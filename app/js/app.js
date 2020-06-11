const mainCarousel = $('#main-carousel');

$(mainCarousel).owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 2,
	center: true,
	responsiveClass: true,
})

$('#inner-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 3
})
$('#inner2-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 3
})
$('#inner3-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 3
})


// Tabs dowload-info

$(".tab_item").not(":first").hide();
$(".download-info-tabs-wrapper .tab").click(function () {
	$(".download-info-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");