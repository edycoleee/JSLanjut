// ambil data dengan format json
// https://api.wheretheiss.at/v1/satellites/25544
// {
//     "name":"iss",
//     "id":25544,
//     "latitude":11.003551750404,
//     "longitude":-123.94696223843,
//     "altitude":419.45963108973,
//     "velocity":27580.008881092,
//     "visibility":"eclipsed",
//     "footprint":4504.7132837845,
//     "timestamp":1591676456,
//     "daynum":2459009.6812037,
//     "solar_lat":22.965397285911,
//     "solar_lon":114.59671979473,
//     "units":"kilometers"
// }


// Making a map and tiles
const mymap = L.map('issMap').setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Making a marker with a custom icon
const issIcon = L.icon({
  iconUrl: 'iss200.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  marker.setLatLng([latitude, longitude]);
  if (firstTime) {
    mymap.setView([latitude, longitude], 2);
    firstTime = false;
  }
  document.getElementById('lat').textContent = latitude.toFixed(2);
  document.getElementById('lon').textContent = longitude.toFixed(2);
}

getISS();

setInterval(getISS, 1000);