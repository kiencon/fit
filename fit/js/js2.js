jQuery(document).ready(function($) {
	$(function () {
		$("#btn").click(function(event) {
			$("body").toggleClass('w170');
			$("#main-menu-hide").toggleClass('hide');
		});
	});
});