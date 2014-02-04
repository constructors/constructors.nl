$(function () {
  var map = L.map('cmap').setView([51.4348186, 5.4778511], 15);

  L.tileLayer('http://{s}.tile.cloudmade.com/5b2cd43f637d474f88eaddfedf7de761/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(map);

  var marker = L.marker([51.4348186, 5.4778511]).addTo(map);
});
