
//const mainCarousel = $('#main-carousel');
//$(mainCarousel).owlCarousel({
//	loop: true,
//	rewind: false,
//	margin: 60,
//	dots: false,
//	nav: true,
//	items: 2,
//	center: true,
//	responsiveClass: true,
//	mouseDrag: false
//})

//$('.owl-item.center').next().addClass('after-center')

//$('.owl-next').click(function() {
//	$('.owl-item.center').removeClass('after-center')
//	$('.owl-item.center').prev().removeClass('after-center')
//	$('.owl-item.center').next().addClass('after-center')
//})

//$('.owl-prev').click(function() {
//	$('.owl-item.center').removeClass('after-center')
//	$('.owl-item.center').next().addClass('after-center')
//})

//var cnt = 1;
//$(".main-carousel .item .under-carousel").each(function () {
//    $(this).attr('id', function (index) {
//        return "inner-carousel" + cnt;
//	});

//	$(`#inner-carousel${cnt}`).owlCarousel({
//		loop: false,
//		rewind: false,
//		margin: 30,
//		dots: false,
//		nav: true,
//		items: 3
//	})


//    cnt++;
//});

$(document).ready(function () {

	$('[data-fancybox="gallery"]').fancybox({
		//thumbs: {
		//	autoStart: true
		//}
	});


	$('.main-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		easing: 'ease',
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});

	$('.under-slide1').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>'
	});

	$('.under-slide2').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>'
	});

	$('.under-slide3').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>'
	});

	$('.under-slide4').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>'
	});

	$('.catalog-btn').hover(function () {
		$(this).toggleClass('active');
		$('.catalog-dropdown').toggleClass('active');
	})

	$('.catalog-dropdown').hover(function () {
		$(this).toggleClass('active');
		$('.catalog-btn').toggleClass('active');
	})

	// Tabs dowload-info

	$(".tab_item").not(":first").hide();
	$(".download-info-tabs-wrapper .tab").click(function () {
		$(".download-info-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// 2GIS map

	var map;

	DG.then(function () {
		map = DG.map('map', {
			center: [43.237734, 76.932223],
			zoom: 16
		});
		DG.marker([43.237734, 76.932223]).addTo(map);
	});

});

