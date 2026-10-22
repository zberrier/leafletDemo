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

// let buildings = [{
//     'type': 'Feature',
//     'properties': {
//         'name': 'Walter Library',
//         'show': true
//     },
//     'geometry': {
//         'type': 'Point',
//         'coordinates': [-93.236233, 44.975288]
//     }
// },{
//     'type': 'Feature',
//     'properties': {
//         'name': 'Mechanical Engineering Building',
//         'show': true,
//     },
//     'geometry': {
//         'type': 'Point',
//         'coordinates': [-93.233482, 44.975340]
//     }
// }, {
//     'type': 'Feature',
//     'properties': {
//         'name': 'Ford Hall',
//         'show': false
//     },
//     'geometry': {
//         'type': 'Point',
//         'coordinates': [-93.234448, 44.973919]
//     }
// }, {
//     'type': 'Feature',
//     'properties': {
//         'name': 'Smith Hall',
//         'show': true
//     },
//     'geometry': {
//         'type': 'Polygon',
//         'coordinates': [[
//             [-93.23660185474935, 44.974798474920156],
//             [-93.23658125538476, 44.97421314893313],
//             [-93.23585341116906, 44.974210720182164],
//             [-93.23586371085136, 44.97480333237222]
//         ]]
//     }
// }, {
//     'type': 'Feature',
//     'properties': {
//         'name': 'Johnston Hall',
//         'show': true
//     },
//     'geometry': {
//         'type': 'Polygon',
//         'coordinates': [[
//             [-93.23592584527577, 44.97596191566498],
//             [-93.23592584527577, 44.975743926692886],
//             [-93.23670962597741, 44.975743926692886],
//             [-93.23672302393815, 44.9759524379008]
//         ]]
//     }
// },{
//     'type': 'Feature',
//     'properties': {
//         'name': 'Tate Hall',
//         'show': false
//     },
//     'geometry': {
//         'type': 'Polygon',
//         'coordinates': [[
//             [-93.23416401344211, 44.975568654486125],
//             [-93.23492099822235, 44.97558287122692],
//             [-93.23492099822235, 44.974995243002425],
//             [-93.23413051854034, 44.97500472092482],
//             [-93.23413721752068, 44.97522745164946],
//             [-93.23427119712781, 44.97522271270687],
//             [-93.23427119712781, 44.97533170828715],
//             [-93.23415061548141, 44.97533170828715]
//         ]]
//     }
// }];

