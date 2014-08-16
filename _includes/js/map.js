$(function () {
  var map = L.map('cmap').setView([51.4348186, 5.4778511], 15);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  var marker = L.marker([51.4348186, 5.4778511]).addTo(map);
});
