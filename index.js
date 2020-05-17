//1. require express dan nedb
const express = require("express");
const Datastore = require("nedb");
const fetch = require("node-fetch");
require('dotenv').config();
console.log(process.env);


//2. create app
const app = express();
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`Starting server at ${port}`);
})
//listen port
//app.listen(3000, () => console.log("listening at 3000"));
// mengarahkan bahwa http://127.0.0.1:3000/ ke public/index.html
app.use(express.static("public"));
// express siap menggunakan json
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();
//database.insert({ name:'silmi', status :'adik'})
//database.insert({ name:'afin', status :'kakak'})

//3. saat ada post dengan alamat /api maka akan respon
// perintah utk mendapatkan data dari client dan mengirim hasil ke client (POST)
app.post("/api", (request, response) => {
  console.log("request sukses");
  console.log(request.body);
  const timestamp = Date.now();
  const data = request.body;
  data.timestamp = timestamp;
  database.insert(data);
  // respon jika server telah menerima data dri client
  response.json({
    status: "sukses",
    latitude: data.lat,
    timestamp: timestamp,
    longitude: data.lon,
  });
});

//4. respon kirim data request dari client (GET)
app.get("/api", (request, response) => {
  //mencoba response
  //response.json({test : 123})
  //find data pada database=>kirim semua data
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

//5. respon ambil data dari cloud endpoint
// mebutuhkan paket npm install node-fetch
// untuk mengambil kota dari client->server->cloud
// melempar data cloud->server->client dibutuhkan route
app.get("/weather/:kota", async (request, response) => {
  console.log(request.params);
  const kota = request.params.kota;
  console.log(kota);
  //const api_key = '999ab7e8c4b9696588efeb00c223db260c677a4d'
  const api_key = process.env.API_KEY
  const api_url = `http://api.waqi.info/feed/${kota}/?token=${api_key}`;
  //const api_url = `http://api.waqi.info/feed/jakarta/?token=999ab7e8c4b9696588efeb00c223db260c677a4d`;
  const ambil_resp = await fetch(api_url);
  const dataku = await ambil_resp.json();
  response.json(dataku);
  //console.log(dataku.data.city.geo);
});
