// Making a map
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
const mymap = L.map("mapid").setView([0, 0], 1);

// Making a marker with an custom icon
const issIcon = L.icon({
  iconUrl: "iss.png",
  iconSize: [40, 20],
  iconAnchor: [20, 10],
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

// Fetching api and sets new values of ISS marker on the map
const url_api = "https://api.wheretheiss.at/v1/satellites/25544";

async function getAPI() {
  const response = await fetch(url_api);
  const data = await response.json();
  const { latitude, longitude } = data;
  marker.setLatLng([latitude, longitude]);
  document.getElementById("lon").innerText = longitude;
  document.getElementById("lat").innerText = latitude;
}

getAPI();
