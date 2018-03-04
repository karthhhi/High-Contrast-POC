$(document).ready(function () {
	// Check if highContrast localstorage variable and set body class
	if (localStorage.getItem("highContrast") == 1) {
		$("body").addClass("highcontrast");
		$("#highcontrast-toggle-button").html('Disable High Contrast Mode');
	} else {
		$("#highcontrast-toggle-button").html('Enable High Contrast Mode');
	}
	// High Contrast toggle button
	$("#highcontrast-toggle-button").click(function () {
		if (localStorage.getItem("highContrast") == 1) {
			localStorage.setItem("highContrast", 0);
			$("body").removeClass("highcontrast");
			$(this).html('Enable High Contrast Mode');
		} else {
			localStorage.setItem("highContrast", 1);
			$('body').addClass('highcontrast');
			$(this).html('Disable High Contrast Mode');
		}
	});
	// highcontrast-close-button
	$("#highcontrast-close-button").click(function () {
		$(this).parent().remove();
	});
});