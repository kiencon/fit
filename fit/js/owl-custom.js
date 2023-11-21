jQuery(document).ready(function ($) {
	"use strict";
	$('#customers-feeling').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 30,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
	$('#customers-comment').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 30,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 3
			}
		}
	});
	$(function () {
		$("#btn").click(function (event) {
			alert("dadong");
			$("body").toggleClass('w170');
			$("#main-menu-hide").toggleClass('hide');
		});
	});
	$(function () {
		$("#btn").click(function(event) {
			$("body").toggleClass('w170');
			$("#main-menu-hide").toggleClass('hide');
		});
	});
});

