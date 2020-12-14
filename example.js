const mymap = L.map("mapid").setView([51.505, -0.09], 13);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

const url_api = "https://api.wheretheiss.at/v1/satellites/25544";

async function getAPI() {
  const response = await fetch(url_api);
  const data = await response.json();
  const { longitude, latitude } = data;
  document.getElementById("lon").innerText = longitude;
  document.getElementById("lat").innerText = latitude;
}

getAPI();
