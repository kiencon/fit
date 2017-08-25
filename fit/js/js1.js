$(document).ready(function($) {
	// mặc định là đóng
	var i = "dong";
	$("#show").click(function(event) {
		if (i == "dong") {
			$("#main-menu").toggle();	
			i = "mo";
			$("#main-menu").removeClass('hide');
			$("body").removeClass('_w100');
			$("body").addClass('_w150');
			$("._main").addClass('_w100');
		}
		else {
			$("#main-menu").toggle();	
			i = "dong";
			$("body").removeClass('_w150');
			$("body").addClass('_w100');
		}
	});
});