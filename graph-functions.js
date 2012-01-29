// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();

	var sites = JSON.parse(localStorage.sites);

	/* Sort sites by time spent */
	var sortedSites = new Array();
	var totalTime = 0;
	for(site in sites) {
		sortedSites.push([site, sites[site]]);
		totalTime += sites[site];
	}
	sortedSites.sort(function(a, b) {
		return b[1] - a[1];
	});
	/* Show only the top 15 sites by default */
	var max = 15;
	if(document.location.href.indexOf("show=all") != -1) {
		max = sortedSites.length;
	}

	data.addColumn('string', 'url');
	data.addColumn('number', 'Energy');

	for(var index = 0; ((index < sortedSites.length) && (index < max)); index++) {
		var site = sortedSites[index][0];
		var title = JSON.parse(localStorage.tabTitles)[site];

		data.addRows([[title, (sites[site].toFixed(6) * power.toFixed(2))]]);
	}

	// Set chart options
	var options = {
		'title' : 'Energy Breakdown',
		'width' : 500,
		'height' : 250,
		'colors' : ['green'],
		'vAxis.textPosition' : 'in'
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}