import './scss/main';

$(document).ready(function() {
	if (Modernizr) {
		console.log("Modernizr is active");
	}

	var toggleButton = $('<input/>').attr({ type: 'button', id: 'toggleme', name: 'toggleme', class: 'btn btn-primary', value: 'Toggle!' });

	$("#main>section.with-toggle-button").append(toggleButton);

	toggleButton.on("click", function() {
		$("#main>section.toggleable").toggle();
	});

	console.log("Hello from JavaScript!");
	console.log(moment().startOf('day').fromNow());
});
