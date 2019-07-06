import './scss/main';

$(document).ready(function(){
	if(Modernizr){
		console.log("Modernizr is active");
	}

	var toggleButton = $('<input/>').attr({ type: 'button', id: 'toggleme', name:'toggleme', class: 'btn btn-primary', value:'Toggle!' });

	$("#main>section").append(toggleButton);

	toggleButton.on("click", function() {
		$("#main>section>.container").toggle();
	});

	var app2 = new Vue({
		el: '#vue',
		data: {
			message: 'You loaded this page on ' + new Date().toLocaleString()
		}
	});

	function readTableRow(row) {
		var values  = [];
		$("td", row).each(function(index, field) {
			var span = $(field).attr("colspan");
			var val = $(field).text();
			if (span && span > 1) {
				for (var i = 0; i<span; i++ ) {
					values.push(val);
				}
			} else {
				values.push(val);
			}
		});
		return values;
	}

	function getColumnsVal(id) {
		// Read the first row, taking colspans into account
		var first_row = $("table#" + id + " thead tr:eq(0)");
		var first_row_vals = readTableRow(first_row);

		// Read the second row, taking colspans into account
		var second_row = $("table#" + id + " thead tr:eq(1)");
		var second_row_vals = readTableRow(second_row);

		if (first_row_vals.length != second_row_vals.length) {
			return null;
		}

		var results = [];
		for (var i = 0; i<first_row_vals.length; i++) {
			results.push([first_row_vals[i].trim(), second_row_vals[i].trim()].filter(function (el) {return el}).join("-"));
		}

		return results;
	}

	function displayResults(results) {
		var result = "RESULT: <br />";
		results.forEach(function(r) {
			result = result + r + "<br />";
		});
		$("#result").html(result);
	}

	displayResults(getColumnsVal("sample"));

});

