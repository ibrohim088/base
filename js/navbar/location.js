var map = L.map('map').setView([41.311193, 69.279717], 13); // Ташкент, можешь менять

setTimeout(() => {
  map.invalidateSize();
}, 200);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var first = L.marker([41.311193, 69.279717]).addTo(map);

first.bindPopup('First place').openPopup();


