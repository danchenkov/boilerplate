import './scss/main';

function setCheckedValueOfRadioButtonGroup(name, value) {
	var radios = document.getElementsByName(name);
	for (var j = 0; j < radios.length; j++) {
		if (radios[j].value == value) {
			radios[j].checked = true;
			break;
		}
	}
}

function setCheckedValueOfCheckbox(name, value) {
	var checkbox = document.getElementsByName(name);
	for (var j = 0; j < checkbox.length; j++) {
		if (checkbox[j].value == value) {
			checkbox[j].checked = true;
		}
	}
}

function setValueOfFormField(name, value) {
	var fields = document.getElementsByName(name);
	for (var j = 0; j < fields.length; j++) {
		fields[j].value = value;
	}
}

$(document).ready(function() {
	if (Modernizr) {
		console.log("Modernizr is active");
	}

	var toggleButton = $('<input/>').attr({ type: 'button', id: 'toggleme', name: 'toggleme', class: 'btn btn-primary', value: 'Toggle!' });

	$("#main>section.with-toggle-button").append(toggleButton);

	toggleButton.on("click", function() {
		$("#main>section.toggleable").toggle();
	});

	// console.log("Hello from JavaScript!");
	// moment.locale($("#start-of-the-day")[0].lang);
	moment.locale(document.documentElement.lang);
	$(".start-of-the-day").text(moment().startOf('day').fromNow());

	if (window.location.pathname == "/sample-form.html") {
		var urlParams = new URLSearchParams(window.location.search);
		setCheckedValueOfRadioButtonGroup('title', urlParams.get('title'))
		setValueOfFormField('first_name', urlParams.get('first_name'))
		setValueOfFormField('last_name', urlParams.get('last_name'))
		setValueOfFormField('email', urlParams.get('email'))
		setValueOfFormField('phone', urlParams.get('phone'))
		setValueOfFormField('country', urlParams.get('country'))
		setValueOfFormField('password', urlParams.get('password'))
		setCheckedValueOfCheckbox('terms', urlParams.get('terms'))
	}


});


