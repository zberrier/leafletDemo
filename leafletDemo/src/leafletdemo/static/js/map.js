var map = L.map('map').setView([44.97449, -93.23514], 16);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([44.973948, -93.237236]).addTo(map);

var circle = L.circle([44.971412, -93.228586], {
    color: 'red',
    // fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 200
}).addTo(map);

marker.bindPopup("You Are Here!");
circle.bindPopup("The Blast Zone");

var locationLayer = L.layerGroup([marker]).addTo(map)
var blastZoneLayer = L.layerGroup([circle]).addTo(map);
var clickedMarkers = L.layerGroup().addTo(map);

L.control.layers(
    { "OpenStreetMap": osm },
    {
        "Your Location": locationLayer,
        "Blast Zone": blastZoneLayer,
        "Clicked Locations": clickedMarkers
    }
).addTo(map);

map.on('click', onMapClick);
function onMapClick(e) {
    // alert("You clicked the map at " + e.latlng);
    L.marker(e.latlng).addTo(clickedMarkers)
}
