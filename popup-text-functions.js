/**
 * @author Daniel Schien
 */
function initialize() {

	// initialise the device power value from the user defined option
	setDevicePower();

	var stats = document.getElementById("stats");
	if(stats.childNodes.length == 1) {
		stats.removeChild(stats.childNodes[0]);
	}

	if(localStorage["storageType"] == "appengine") {
		addFrame();
	} else if(localStorage["storageType"] == "local") {
		addLocalDisplay();
	}

	var link = document.getElementById("toggle_pause");
	if(localStorage["paused"] == undefined || localStorage["paused"] == "false") {
		localStorage["paused"] = "false";
		link.innerHTML = "Pause Timer";
	} else {
		link.innerHTML = "Resume Timer";
	}

	var nextClearStats = localStorage["nextTimeToClear"];
	if(nextClearStats) {
		nextClearStats = parseInt(nextClearStats, 10);
		nextClearStats = new Date(nextClearStats);
		var nextClearDiv = document.getElementById("nextClear");
		if(nextClearDiv.childNodes.length == 1) {
			nextClearDiv.removeChild(nextClear.childNodes[0]);
		}
		nextClearDiv.appendChild(document.createTextNode("Next Reset: " + nextClearStats.toString()));
	}

	// get the own geo ip
	otherloc = getOtherServerLatLong();
	getGeoLocation();

	var bkg = chrome.extension.getBackgroundPage();

	//getLocationForServer('74.200.247.59');

}

var bkg = chrome.extension.getBackgroundPage();

// fake - 30W power consumption
var power = 30;

/**
 * return the google maps compatibe geolocation for a site.
 */
function getGeolocationForSite(site) {

	// use jquery-url to extract host
	var hostName = $.url(site).attr('host');
	console.log(hostName);

}

function addFrame() {
	console.log('add frame');
	/*var iframe = document.createElement("iframe");
	 iframe.setAttribute("src", "http://browser-timetracker.appspot.com/stats/view?now=" +
	 escape(new Date().getTime()/1000));
	 iframe.setAttribute("width", "400px");
	 iframe.setAttribute("height", "400px");
	 iframe.setAttribute("id", "stats_frame");
	 document.getElementById("stats").appendChild(iframe);*/
}

function addIgnoredSite(new_site) {
	return function() {
		chrome.extension.sendRequest({
			action : "addIgnoredSite",
			site : new_site
		}, function(response) {
			initialize();
		});
	};
}

var energyData = new Array()

function addLocalDisplay() {
	var currentTitle = null;
	bkg.console.log("[popup] searching current title tab");
	chrome.tabs.getCurrent(function(tab) {
		bkg.console.log("title: " + tab.title);
		currentTitle = tab.title;
	});
	bkg.console.log("currentTitle: " + currentTitle);

	var table = document.createElement("table");
	var row = document.createElement("tr");
	var cell = document.createElement("th");
	cell.appendChild(document.createTextNode("Site"));
	table.style.border = "1px solid black";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.appendChild(document.createTextNode("Minutes"));
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.appendChild(document.createTextNode("Percent"));
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.appendChild(document.createTextNode("Energy [Wh]"));
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.appendChild(document.createTextNode("[g-CO2-e] "));
	row.appendChild(cell);
	table.appendChild(row);
	var sites = JSON.parse(localStorage.sites);

	/* Sort sites by time spent */
	var co2Eq = 0.52;
	var sortedSites = new Array();
	var totalTime = 0;
	var totalEnergy = 0;
	var totalCarbon = 0;
	for(site in sites) {
		sortedSites.push([site, sites[site]]);
		totalTime += sites[site];
		totalEnergy += sites[site] * power / 3600;
		totalCarbon += sites[site] * power / 3600 * co2Eq;
	}
	sortedSites.sort(function(a, b) {
		return b[1] - a[1];
	});
	/* Show only the top 15 sites by default */
	var max = 15;
	if(document.location.href.indexOf("show=all") != -1) {
		max = sortedSites.length;
	}

	/* Add total row. */
	row = document.createElement("tr");
	cell = document.createElement("td");
	cell.innerHTML = "<b>Total</b>";
	row.appendChild(cell);
	cell = document.createElement("td");
	cell.appendChild(document.createTextNode((totalTime / 60).toFixed(2)));
	row.appendChild(cell);
	cell = document.createElement("td");
	cell.appendChild(document.createTextNode(("100")));
	row.appendChild(cell);
	cell = document.createElement("td");
	cell.appendChild(document.createTextNode(totalEnergy.toFixed(2)));
	row.appendChild(cell);
	cell = document.createElement("td");
	cell.appendChild(document.createTextNode(totalCarbon.toFixed(2)));
	row.appendChild(cell);

	table.appendChild(row);

	for(var index = 0; ((index < sortedSites.length) && (index < max)); index++) {
		var site = sortedSites[index][0];
		row = document.createElement("tr");
		cell = document.createElement("td");
		var removeImage = document.createElement("img");
		removeImage.src = chrome.extension.getURL("images/remove.png");

		// TODO spacer
		removeImage.title = "Remove and stop tracking.";
		removeImage.width = 10;
		removeImage.height = 10;
		removeImage.onclick = addIgnoredSite(site);
		cell.appendChild(removeImage);

		// TODO truncate text, maybe?
		var title = JSON.parse(localStorage.tabTitles)[site];
		bkg.console.log("[popup] writing title" + title);
		var titleLength = 30;

		var tn = document.createTextNode(title.substring(0, Math.min(titleLength, title.length)));
		if(title == currentTitle) {
			tn = tn.className += "myText";
		}

		cell.appendChild(tn);
		// time
		row.appendChild(cell);
		cell = document.createElement("td");
		cell.appendChild(document.createTextNode((sites[site] / 60).toFixed(2)));
		row.appendChild(cell);
		// percentage
		cell = document.createElement("td");
		cell.appendChild(document.createTextNode((sites[site] / totalTime * 100).toFixed(2)));
		row.appendChild(cell);
		// energy
		cell = document.createElement("td");
		var energy = sites[site] * power / 3600;
		cell.appendChild(document.createTextNode((energy).toFixed(2)));
		row.appendChild(cell);

		// carbon
		var carbon = energy * co2Eq;
		cell = document.createElement("td");
		cell.appendChild(document.createTextNode(carbon.toFixed(2)));
		row.appendChild(cell);

		table.appendChild(row);
	}
	document.getElementById("stats").appendChild(table);

	/* Add an option to show all stats */
	var showAllLink = document.createElement("a");
	showAllLink.onclick = function() {
		chrome.tabs.create({
			url : "popup.html?show=all"
		});
	}
	/* Show the "Show All" link if there are some sites we didn't show. */
	if(max < sortedSites.length) {
		showAllLink.setAttribute("href", "javascript:void(0)");
		showAllLink.appendChild(document.createTextNode("Show All"));
		document.getElementById("options").appendChild(showAllLink);
	}
}

function sendStats() {
	chrome.extension.sendRequest({
		action : "sendStats"
	}, function(response) {
		/* Reload the iframe. */
		var iframe = document.getElementById("stats_frame");
		iframe.src = iframe.src;
	});
}

function clearStats() {
	console.log("Request to clear stats.");
	chrome.extension.sendRequest({
		action : "clearStats"
	}, function(response) {
		initialize();
	});
}

function togglePause() {
	console.log("In toggle pause");
	console.log("Value = " + localStorage["paused"]);
	if(localStorage["paused"] == "false") {
		console.log("Setting to Resume");
		chrome.extension.sendRequest({
			action : "pause"
		}, function(response) {
		});
		document.getElementById("toggle_pause").innerHTML = "Resume Timer";
	} else if(localStorage["paused"] == "true") {
		console.log("Setting to Pause");
		chrome.extension.sendRequest({
			action : "resume"
		}, function(response) {
		});
		document.getElementById("toggle_pause").innerHTML = "Pause Timer";
	}
}

function setDevicePower() {
	if(localStorage["deviceType"] == "laptop") {
		bkg.console.log("[popup] - setting device power to 30W");
		power = 30;
	} else {
		// assume it's a desktop
		bkg.console.log("[popup] - setting device power to 78W");
		power = 78;
	}
}