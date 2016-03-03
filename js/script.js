
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)  


$(document).ready(function() {
	console.log("Init.");
	loadData();
});

function loadData() {

	console.log("loadData()");

	$.getJSON("js/donations_over_5k.json", function(data) {
		//console.log(data);
		writeTable(data); 

	});
}
	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount

function writeTable(data) {

		console.log("call from loopThroughData");
	    console.log(data.length);

	    for (i=0; i<data.length; i++) {

	    	//console.log(data[i]);

		    var Date = data[i]["Contribution Date"];
		    var Info= data[i]["Contribution Information"];
		    var Amount = data[i]["Amount"];
		    var Committee = data[i]["Committee"];
	
			console.log(Date + ' - ' + Info);

		    if ( Committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL")
			$("#myTable tbody").append('<tr><td>' + Date + '</td><td>' + Info + '</td><td>' + Amount + '</td></tr>');
		}
}