getData();
const selfies = [];

//select id time, listen click => sort data b.time - a.time
document.getElementById("time").addEventListener("click", (event) => {
  sortData((a, b) => b.time - a.time);
});

//select id mood, listen click => sort data b.mood > a.mood
document.getElementById("mood").addEventListener("click", (event) => {
  sortData((a, b) => {
    if (b.mood > a.mood) return -1;
    else return 1;
  });
});

//fungsi sort data
function sortData(compare) {
  console.log("awal", selfies);
  for (let item of selfies) {
    item.elt.remove();
  }
  selfies.sort(compare);
  for (let item of selfies) {
    document.body.append(item.elt);
  }
}

//fungsi mengambil data ke server dg GET
async function getData() {
  //menunggu response
  const response = await fetch("/api");
  // mengubah response kedalam json
  const data = await response.json();
  console.log(data);
  //handling data
  for (item of data) {
    //siapkan DOM utk menampung data =>div
    const root = document.createElement("div");
    const mood = document.createElement("div");
    const aqi = document.createElement("div");
    const geo = document.createElement("div");
    const date = document.createElement("div");

    //tampilkan data kedalam DOM
    mood.textContent = `temp : ${item.temp}`;
    aqi.textContent = `aq : ${item.aqin}`;
    geo.textContent = `${item.lati},${item.long}`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;

    // appen kedalam root element
    root.append(mood, geo, date, aqi);
    //appen root element kedalam body
    document.body.append(root);

    //masukkan data kedalam object baru selfies
    //yang sudah komplet dg DOM tinggal di sorting
    selfies.push({
      elt: root,
      time: item.timestamp,
      mood: item.mood,
    });
  }
  console.log(selfies);
}

const mymap = L.map("checkinMap").setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl = "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData1();

async function getData1() {
  const response = await fetch("/api");
  const data = await response.json();

  for (item of data) {
    const marker = L.marker([item.lati, item.long]).addTo(mymap);
    let txt = `The weather here at ${item.lati}&deg;,
    ${item.long}&deg; is ${item.aqin} with
    a temperature of ${item.temp}&deg; C.`;

    if (item.aqin.value < 0) {
      txt += "  No air quality reading.";
    } else {
      txt += `  The concentration of particulate matter 
    (${item.aqin.parameter}) is ${item.aqin.value} 
    ${item.aqin.unit} last read on ${item.aqin.lastUpdated}`;
    }
    marker.bindPopup(txt);
  }
  console.log(data);
}
