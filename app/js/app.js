$('#main-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 1
})
$('#inner-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 2
})
$('#inner2-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 2
})
$('#inner3-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: false,
	nav: true,
	items: 2
})


// Tabs dowload-info

$(".tab_item").not(":first").hide();
$(".download-info-tabs-wrapper .tab").click(function () {
	$(".download-info-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");