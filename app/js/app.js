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
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					variableWidth: false,
					slidesToShow: 1,
					centerMode: false
				}
			}
		]
	});

	$('.under-slide1').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					variableWidth: false,
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		]
	});

	$('.under-slide2').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					variableWidth: false,
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.under-slide3').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					variableWidth: false,
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.under-slide4').slick({
		slidesToShow: 3,
		arrows: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="under-slick-prev"></button>',
		nextArrow: '<button type="button" class="under-slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					variableWidth: false,
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
				}
			}
		]
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

	$('.slick-center').next().addClass('after-center')

	$('.slick-next').click(function () {
		$('.slick-center').removeClass('after-center')
		$('.slick-center').prev().removeClass('after-center')
		$('.slick-center').next().addClass('after-center')
	})

	$('.slick-prev').click(function () {
		$('.slick-center').removeClass('after-center')
		$('.slick-center').next().addClass('after-center')
	})

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

