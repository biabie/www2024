var map;
var marker;

function initializeMap(latitude, longitude) {
    map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    marker = L.marker([latitude, longitude]).addTo(map)

    map.on('click', function(e) {
        var latitude = e.latlng.lat;
        var longitude = e.latlng.lng;

        marker.setLatLng(e.latlng)
        fetchWeatherData(latitude, longitude);
    });
}

function updateMap(latitude, longitude) {
    map.setView([latitude, longitude], 13);
    marker.setLatLng([latitude, longitude])
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        initializeMap(latitude, longitude);

        fetchWeatherData(latitude, longitude);
    }, function() {
        initializeMap(51.505, -0.09);
    });
} else {
    initializeMap(51.505, -0.09);
}