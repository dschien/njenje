/**
 * @author Daniel Schien
 */
var otherloc = new Array(0);
var ServerLocations = {
	"locations" : [{
		"city" : "Redwood City",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "807",
		"zipcode" : "94063",
		"longitude" : "-122.211",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "74.120.140.21",
		"latitude" : "37.4914"
	}, {
		"city" : "Fremont",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "807",
		"zipcode" : "94539",
		"longitude" : "-121.896",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "64.62.243.90",
		"latitude" : "37.5155"
	}, {
		"city" : "",
		"region_code" : "",
		"region_name" : "",
		"metrocode" : "",
		"zipcode" : "",
		"longitude" : "-97",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "23.33.246.227",
		"latitude" : "38"
	}, {
		"city" : "",
		"region_code" : "",
		"region_name" : "",
		"metrocode" : "",
		"zipcode" : "",
		"longitude" : "-97",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "64.236.79.229",
		"latitude" : "38"
	}, {
		"city" : "",
		"region_code" : "",
		"region_name" : "",
		"metrocode" : "",
		"zipcode" : "",
		"longitude" : "-97",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "64.236.85.152",
		"latitude" : "38"
	}, {
		"city" : "Sacramento",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "862",
		"zipcode" : "95835",
		"longitude" : "-121.561",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "69.80.196.159",
		"latitude" : "38.6961"
	}, {
		"city" : "",
		"region_code" : "",
		"region_name" : "",
		"metrocode" : "",
		"zipcode" : "",
		"longitude" : "-97",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "207.200.81.13",
		"latitude" : "38"
	}, {
		"city" : "San Mateo",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "807",
		"zipcode" : "94403",
		"longitude" : "-122.304",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "70.42.129.35",
		"latitude" : "37.5402"
	}, {
		"city" : "Seattle",
		"region_code" : "WA",
		"region_name" : "Washington",
		"metrocode" : "819",
		"zipcode" : "98144",
		"longitude" : "-122.299",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "174.129.27.141",
		"latitude" : "47.5839"
	}, {
		"city" : "Englewood",
		"region_code" : "CO",
		"region_name" : "Colorado",
		"metrocode" : "751",
		"zipcode" : "80112",
		"longitude" : "-104.858",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "204.0.5.18",
		"latitude" : "39.569"
	}, {
		"city" : "Englewood",
		"region_code" : "CO",
		"region_name" : "Colorado",
		"metrocode" : "751",
		"zipcode" : "80112",
		"longitude" : "-104.858",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "204.0.5.51",
		"latitude" : "39.569"
	}, {
		"city" : "Houston",
		"region_code" : "TX",
		"region_name" : "Texas",
		"metrocode" : "618",
		"zipcode" : "77002",
		"longitude" : "-95.367",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "184.173.174.134",
		"latitude" : "29.7523"
	}, {
		"city" : "Mount Laurel",
		"region_code" : "NJ",
		"region_name" : "New Jersey",
		"metrocode" : "504",
		"zipcode" : "08054",
		"longitude" : "-74.9162",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "96.126.120.113",
		"latitude" : "39.9572"
	}, {
		"city" : "Englewood",
		"region_code" : "CO",
		"region_name" : "Colorado",
		"metrocode" : "751",
		"zipcode" : "80112",
		"longitude" : "-104.858",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "204.0.5.51",
		"latitude" : "39.569"
	}, {
		"city" : "Pasadena",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "803",
		"zipcode" : "91105",
		"longitude" : "-118.166",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "173.241.242.7",
		"latitude" : "34.1484"
	}, {
		"city" : "Englewood",
		"region_code" : "CO",
		"region_name" : "Colorado",
		"metrocode" : "751",
		"zipcode" : "80112",
		"longitude" : "-104.858",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "204.0.5.16",
		"latitude" : "39.569"
	}, {
		"city" : "",
		"region_code" : "",
		"region_name" : "",
		"metrocode" : "",
		"zipcode" : "",
		"longitude" : "-97",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "23.56.13.229",
		"latitude" : "38"
	}, {
		"city" : "",
		"region_code" : "",
		"region_name" : "",
		"metrocode" : "",
		"zipcode" : "",
		"longitude" : "-97",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "64.236.79.229",
		"latitude" : "38"
	}, {
		"city" : "Cambridge",
		"region_code" : "MA",
		"region_name" : "Massachusetts",
		"metrocode" : "506",
		"zipcode" : "02142",
		"longitude" : "-71.0843",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "184.30.13.190",
		"latitude" : "42.3626"
	}, {
		"city" : "Tempe",
		"region_code" : "AZ",
		"region_name" : "Arizona",
		"metrocode" : "753",
		"zipcode" : "85281",
		"longitude" : "-111.917",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "68.142.122.70",
		"latitude" : "33.4357"
	}, {
		"city" : "Alexandria",
		"region_code" : "VA",
		"region_name" : "Virginia",
		"metrocode" : "511",
		"zipcode" : "22312",
		"longitude" : "-77.1527",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "64.237.103.151",
		"latitude" : "38.8177"
	}, {
		"city" : "Mountain View",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "807",
		"zipcode" : "94043",
		"longitude" : "-122.057",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "74.125.91.120",
		"latitude" : "37.4192"
	}, {
		"city" : "Westlake Village",
		"region_code" : "CA",
		"region_name" : "California",
		"metrocode" : "803",
		"zipcode" : "91361",
		"longitude" : "-118.894",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "63.215.202.6",
		"latitude" : "34.1444"
	}, {
		"city" : "Englewood",
		"region_code" : "CO",
		"region_name" : "Colorado",
		"metrocode" : "751",
		"zipcode" : "80112",
		"longitude" : "-104.858",
		"country_name" : "United States",
		"country_code" : "US",
		"ip" : "204.0.5.58",
		"latitude" : "39.569"
	}]
};



function getOtherServerLatLong() {
	var positions = new Array(0);
	var bkg = chrome.extension.getBackgroundPage();
	bkg.console.log('hello');
	var loc;
	for(loc in ServerLocations.locations) {

		var latlng = new google.maps.LatLng(ServerLocations.locations[loc].latitude, ServerLocations.locations[loc].longitude);
		bkg.console.log(latlng);
		positions.push(latlng);

	}

	bkg.console.log('positions:');
	bkg.console.log(positions);
	return positions
}

function getLocationForServer(server) {

	bkg.console.log('foo');
	// var reqString = 'http://freegeoip.net/json/74.200.247.59';
	var reqSrv = 'http://freegeoip.net/json/';
	var location = {};

	$.getJSON(reqSrv + server, function(data) {
		bkg.console.log(data['latitude']);
		location['latitude'] = data.latitude;
		bkg.console.log(data.longitude);
		location['longitude'] = data.longitude;

		document.getElementById("map").addLocation
	});
	return location;

}

// Getting Geo Location
function getGeoLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	} else {
		document.getElementById("errorMsg").innerText = "ERROR: browser does not support geo location";
	}
}

// Getting Geo Location success callback
function successCallback(position) {

	// Output the coordinates
	document.getElementById("latitude").innerHTML = "Latitude: " + (+position.coords.latitude).toFixed(6);
	document.getElementById("longitude").innerHTML = "Longitude: " + (+position.coords.longitude).toFixed(6);
	document.getElementById("accuracy").innerHTML = "Accuracy: " + position.coords.accuracy + " m";

	// Show location on Google Map
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	var myOptions = {
		zoom : getZoomLevel(position.coords.accuracy),
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	var marker = new google.maps.Marker({
		position : latlng,
		map : map,
		title : "Your Location"
	});

	// for loop here
	bkg.console.log('otherloc:');
	bkg.console.log(otherloc);
	var loc_i;
	for(loc_i in otherloc) {
		var marker = new google.maps.Marker({
			position : otherloc[loc_i],
			map : map,
			title : "loc_N"
		});

	}
	// map: an instance of google.maps.Map object
	// latlng: an array of google.maps.LatLng objects
	var latlngbounds = new google.maps.LatLngBounds();
	for(var i = 0; i < otherloc.length; i++) {
		latlngbounds.extend(otherloc[i]);
	}

	latlngbounds.extend(latlng);
	map.fitBounds(latlngbounds);

	var circle = new google.maps.Circle({
		map : map,
		radius : position.coords.accuracy,
		fillOpacity : 0.0,
		strokeColor : '#0000FF',
		strokeOpacity : 0.5
	});

	circle.bindTo('center', marker, 'position');
}

// Getting Geo Location error callback
function errorCallback(error) {

	switch(error.code) {

		case error.TIMEOUT:
			document.getElementById("errorMsg").innerHTML = "ERROR: " + error.message;
			break;

		default:
			document.getElementById("errorMsg").innerHTML = "ERROR: " + error.message;
	};
}

// Get map zoom level corresponding to the locaiton's accuracy
function getZoomLevel(accuracy) {

	if(2000 >= accuracy) {
		return 13;
	} else if(4000 >= accuracy) {
		return 12;
	} else if(8000 >= accuracy) {
		return 11;
	} else if(16000 >= accuracy) {
		return 10;
	} else {
		return 9;
	}
}