var basemapUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';


///////////////////////////////////////////////////////////////////////
// Map 1                                                             //
///////////////////////////////////////////////////////////////////////

// - deleted - 

///////////////////////////////////////////////////////////////////////
// Select data for Maps 2 & 3                                                             //
///////////////////////////////////////////////////////////////////////


var year;
var str = "Your last selection was: ";
document.getElementById("res").innerHTML = str + "<b>None</b>";
// listeners
$("#act2015").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2015</b>";
  e.preventDefault();
  year = 15;
  return year;
});
$("#act2014").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2014</b>";
  e.preventDefault();
  year = 14;
  return year;
});
$("#act2013").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2013</b>";
  e.preventDefault();
  year = 13;
  return year;
});
$("#act2012").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2012</b>";
  e.preventDefault();
  year = 12;
  return year;
});
$("#act2011").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2011</b>";
  e.preventDefault();
  year = 11;
  return year;
});
$("#act2010").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2010</b>";
  e.preventDefault();
  year = 10;
  return year;
});
$("#act2009").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2009</b>";
  e.preventDefault();
  year = 09;
  return year;
});
$("#act2008").click(function(e){
  document.getElementById("res").innerHTML = str + "<b>2008</b>";
  e.preventDefault();
  year = 08;
  return year;
});


///////////////////////////////////////////////////////////////////////
// Map 2                                                             //
///////////////////////////////////////////////////////////////////////

var map2 = L.map('map2', {
  scrollWheelZoom: true
}).setView( [55.924586,9.228516], 3);

//clean background
var tile2 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.light'
    });
tile2.addTo(map2);

function brewer2(d) {
    return d > 100000 ? '#0000cc' :
           d > 75000  ? '#BD0026' :
           d > 50000  ? '#E31A1C' :
           d > 30000  ? '#FC4E2A' :
           d > 10000  ? '#FD8D3C' :
           d > 5000   ? '#FEB24C' :
           d > 1000   ? '#FED976' :
                        '#FFEDA0';
}

//this function returns a style object, but dynamically sets fillColor based on the data
function style2(featureData) {
  return {
      fillColor: brewer2(featureData.properties["abs15"]),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}


//helper functions are defined -> get data and render map!
//need to specify style and onEachFeature options when calling L.geoJson().
var geo2;

var myjson;
$.getJSON('data/allData.geojson', function(json){
    myjson = json;
    console.log(myjson);
});
console.log("test", myjson);
$.getJSON('data/allData.geojson', function(allData) {
  geo2 = L.geoJson(allData,{
    style: style2,
  }).addTo(map2);
});