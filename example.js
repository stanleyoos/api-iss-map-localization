const url_api = "https://api.wheretheiss.at/v1/satellites/25544";

async function getAPI() {
  const response = await fetch(url_api);
  const data = await response.json();
  const { longitude, latitude } = data;
  document.getElementById("lon").innerText = longitude;
  document.getElementById("lat").innerText = latitude;
}

getAPI();
