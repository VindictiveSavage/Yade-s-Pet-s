let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.8846, lng: -76.8147 },
        zoom: 8,
    });
}