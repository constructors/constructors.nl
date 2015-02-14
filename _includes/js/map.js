$(function () {
  var map = L.map('cmap').setView([51.44509, 5.44728], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  var marker = L.marker([51.44509, 5.44728]).addTo(map);
});
