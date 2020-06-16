const dataSungai = [
  {
    NamaSungai: "Sungai Wulan (Hulu)",
    lat: -6.8951042,
    lon: 110.7847778,
    Tgl: "04/04/2018",
    TSS: 73,
    DO: 6.36,
    BOD: 5,
    COD: 20,
    Fosfat: 0.75,
    MutuAir: "ringan",
  },
  {
    NamaSungai: "Sungai Wulan (Tengah)",
    lat: -6.8405278,
    lon: 110.8115833,
    Tgl: "04/04/2018",
    TSS: 122,
    DO: 6.36,
    BOD: 5,
    COD: 20,
    Fosfat: 0.76,
    MutuAir: "ringan",
  },
  {
    NamaSungai: "Sungai Wulan (Hilir 1)",
    lat: -6.7998917,
    lon: 110.7268333,
    Tgl: "04/04/2018",
    TSS: 30,
    DO: 6.42,
    BOD: 4,
    COD: 20,
    Fosfat: 0.93,
    MutuAir: "berat",
  },
  {
    NamaSungai: "Sungai Wulan (Hilir 2)",
    lat: -6.7759330,
    lon:  110.6250020,
    Tgl: "13/04/2018",
    TSS: 38,
    DO: 6.15,
    BOD: 12,
    COD: 103,
    Fosfat: 0.6,
    MutuAir: "sedang",
  },
  {
    NamaSungai: "Sungai Jajar (Hulu)",
    lat: -6.95366667,
    lon: 110.69500000,
    Tgl: "06/04/2018",
    TSS: 122,
    DO: 6.49,
    BOD: 5,
    COD: 23,
    Fosfat: 1.15,
    MutuAir: "ringan",
  },
];

//console.log(dataSungai[0].lat);

//-6.894525,110.638386
const mymap = L.map("checkinMap").setView([-6.894525, 110.638386], 11);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl = "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();

//async function getData() {
function getData() {
  //const response = await fetch('/api');
  //const data = await response.json();
  const data = dataSungai;
  console.log(data);
  for (item of data) {
    console.log(item.lat, item.lon);
    const marker = L.marker([item.lat, item.lon]).addTo(mymap);
    let txt = `${item.NamaSungai},lat: ${item.lat}&deg;,
    lon: ${item.lon}&deg;,Tgl sampling: ${item.Tgl},
    TSS: ${item.TSS}, DO: ${item.DO}, BOD: ${item.BOD}, COD: ${item.COD}, FOSFAT: ${item.Fosfat}.
    <span class="teks_merah"> coba </span>`;
    if (item.MutuAir === "berat") {
      txt += " Status Mutu Air :  Berat.";
    } else {
      txt += ` Status Mutu Air : ${item.MutuAir}`;
    }
    marker.bindPopup(txt);
  }
  console.log(data);
}