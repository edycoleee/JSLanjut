// setView([latitude, longitude], zoomlevel)
// Making a map and tiles
// Setting a higher initial zoom to make effect more obvious
const mymap = L.map("issMap").setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const tiles = L.tileLayer(tileUrl, {
  attribution,
});
tiles.addTo(mymap);

//Making a marker with a custom icon
const issIcon = L.icon({
  iconUrl: "iss200.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

//setting marker pada map
const marker = L.marker([0, 0], {
  icon: issIcon,
}).addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
let firstTime = true;
async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  //console.log(data, data.latitude,data.longitude);
  //refactoring JSON data
  const { latitude, longitude } = data;
  console.log(latitude, longitude);
  //set marker sesuai lat dan long
  marker.setLatLng([latitude, longitude]);
  // jika pertama kali dibuka maka akan tampil
  // sebagai posisi default
  if (firstTime) {
    mymap.setView([latitude, longitude], 1);
    firstTime = false;
  }
  //update DOM
  document.getElementById("lat").textContent = latitude.toFixed(2);
  document.getElementById("lon").textContent = longitude.toFixed(2);
}
getData();
// set interval for refreshing data
setInterval(getData, 1000);
