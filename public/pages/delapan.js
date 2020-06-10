//https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv
//https://data.giss.nasa.gov/gistemp/

// //panggil getdata dengan file kecil ('test.csv')
// getData();
// //1. fungsi getdata async
// async function getData() {
//   const xs = [];
//   const ys = [];
//   //2. tunggu response
//   //const response = await fetch('test.csv')
//   const response = await fetch("ZonAnn.Ts+dSST.csv");
//   //3. setelah itu konversi ke bentuk text
//   const data = await response.text();
//   console.log(data);
//   //4. split data new laine menjadi new array rows
//   //const rows = data.split('\n')
//   //console.log(rows);
//   //(3) ["Year,Glob,NHem,SHem,24N-90N,24S-...........",
//   //"1880,-.16,-.27,-.05,-.35,-.13,.........",
//   //"1881,-.08,-.16,.00,-.32,.10,-........."]
//   //5. menghilangkan baris 1 dengan slice
//   const rows = data.split("\n").slice(1);
//   console.log(rows);
//   //(2) ["1880,-.16,-.27,-.05,-.35,-.13,.........",
//   //"1881,-.08,-.16,.00,-.32,.10,-........."]
//   //6. scan setiap baris dan hilangkan tanda(,)
//   // simpan menjadi 2 array
//   rows.forEach((row) => {
//     const colomn = row.split(",");
//     console.log(colomn);
//     //(15) ["1880", "-.16", "-.27", "-.05", ........]
//     //(15) ["1881", "-.08", "-.16", ".00", .........]
//     // untuk mengambil data tahun dan temperature
//     // tahun pada colomn 1, temperature pada colomn 2
//     const year = colomn[0];
//     const temp = colomn[1];
//     console.log(year, temp);
//     //1880 -.16
//     //1881 -.08

//     xs.push(year);
//     ys.push(parseFloat(temp) + 14);
//   });
//   return { xs, ys };
// }

// Tampilkan grafik---------------------------------------------------
// menampilkan data dengan chart.js
// Getting Started
// https://www.chartjs.org/docs/latest/getting-started/
// Let's get started using Chart.js!
// First, we need to have a canvas in our page.
// <canvas id="myChart"></canvas>
// Now that we have a canvas we can use, we need to include Chart.js in our page.
// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
// Now, we can create a chart

chartIt1();
async function chartIt1() {
  //panggil getdata
  const data = await getData();
  console.log("xAxis :", data.xs, "yAxis :", data.ys);
  // copy and modif data from chart.js
  //https://www.chartjs.org/docs/latest/getting-started/
  const ctx = document.getElementById("chart").getContext("2d");
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: data.xs,
      datasets: [
        {
          label: "Global Average Temperature",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          //tanpa fill warna
          fill: false,
          data: data.ys,
        },
      ],
    },
    // Configuration options go here
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return value + "C";
              },
            },
          },
        ],
      },
    },
  });
}

// //1. fungsi getdata async
// async function getData() {
//   const xs = [];
//   const ys = [];
//   //2. tunggu response
//   const response = await fetch("ZonAnn.Ts+dSST.csv");
//   //3. setelah itu konversi ke bentuk text
//   const data = await response.text();
//   //5. menghilangkan baris 1 dengan slice
//   const rows = data.split("\n").slice(1);
//   //6. scan setiap baris dan hilangkan tanda(,)
//   rows.forEach((row) => {
//     const colomn = row.split(",");
//     const year = colomn[0];
//     xs.push(year);
//     const temp = colomn[1];
//     ys.push(parseFloat(temp) + 14);
//   });
//   return { xs, ys };
// }

//------------------------------------------------------------
chartIt();
async function chartIt() {
  //panggil getdata
  const data = await getData();
  console.log("xAxis :", data.xs, "yAxis :", data.ys);
  const ctx = document.getElementById("chartDua").getContext("2d");
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: data.xs,
      datasets: [
        {
          label: "Global Average Temperature",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          //tanpa fill warna
          fill: false,
          data: data.ys,
        },
        {
          label: "Northern Hemisphere Temperature in °C",
          data: data.northern,
          fill: false,
          borderColor: "rgba(99, 132, 255, 1)",
          backgroundColor: "rgba(99, 132, 255, 0.5)",
          borderWidth: 1,
        },
        {
          label: "Souther Hemisphere in °C",
          data: data.southern,
          fill: false,
          borderColor: "rgba(99, 255, 132, 1)",
          backgroundColor: "rgba(99, 255, 132, 0.5)",
          borderWidth: 1,
        },
      ],
    },
    // Configuration options go here
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return value + "C";
              },
            },
          },
        ],
      },
    },
  });
}

//1. fungsi getdata async
async function getData() {
  const xs = [];
  const ys = [];
  const northern = [];
  const southern = [];
  //2. tunggu response
  const response = await fetch("ZonAnn.Ts+dSST.csv");
  //3. setelah itu konversi ke bentuk text
  const data = await response.text();
  //5. menghilangkan baris 1 dengan slice
  const rows = data.split("\n").slice(1);
  //6. scan setiap baris dan hilangkan tanda(,)
  rows.forEach((row) => {
    const colomn = row.split(",");
    const year = colomn[0];
    xs.push(year);
    const temp = colomn[1];
    ys.push(parseFloat(temp) + 14);
    northern.push(14 + parseFloat(colomn[2]));
    southern.push(14 + parseFloat(colomn[3]));
  });
  return {
    xs,
    ys,
    northern,
    southern,
  };
}
