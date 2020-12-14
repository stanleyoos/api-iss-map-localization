// Making a map
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });

const mymap = L.map("mapid").setView([0, 0], 1);
tiles.addTo(mymap);

// Making a marker with an custom icon
const issIcon = L.icon({
  iconUrl: "iss.png",
  iconSize: [40, 20],
  iconAnchor: [20, 10],
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

// Fetching api and sets new values of ISS marker on the map
const url_api = "https://api.wheretheiss.at/v1/satellites/25544";

let flag = true;
async function getAPI() {
  const response = await fetch(url_api);
  const data = await response.json();
  const { latitude, longitude } = data;
  if (flag) {
    mymap.setView([latitude, longitude], 2);
    flag = false;
  }

  marker.setLatLng([latitude, longitude]);
  document.getElementById("lon").innerText = longitude.toFixed(2);
  document.getElementById("lat").innerText = latitude.toFixed(2);
}

getAPI();

setInterval(getAPI, 1000);
