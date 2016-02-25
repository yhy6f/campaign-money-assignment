
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campain


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.

	loadData();

});




function loadData() {
	
	$.getJSON("js/donations_over_5K.json", function(data) {
		writeTable(data);
	});

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
}



function writeTable(data) {

	$.each(data, function(i, item) {
		if (item["Committee"] === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
			$("table.donations tbody").append(
				"<tr>"+
					"<td>"+item["Contribution Date"]+"</td>"+
	                "<td>"+item["Contribution Information"]+"</td>"+
	                "<td class='amount'>"+item["Amount"]+"</td>"+
                "</tr>"
			);
		}
	});

	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
}

