
// Data from: https://data.giss.nasa.gov/gistemp/
// Mean from: https://earthobservatory.nasa.gov/world-of-change/DecadalTemp
window.addEventListener('load', setup);

async function setup() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const dataIKLH = await getData();
  console.log(dataIKLH);
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataIKLH.tahun,
      datasets: [
        {
          label: 'Realisasi IKLH dalam indek',
          data: dataIKLH.iklh,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Target IKLH sesuai RPJMD',
          data: dataIKLH.rpjmd,
          fill: false,
          borderColor: 'rgba(99, 132, 255, 1)',
          backgroundColor: 'rgba(99, 132, 255, 0.5)',
          borderWidth: 1
        }
      ]
    },
    options: {}
  });
}

async function getData() {
  const response = await fetch('IKLH.csv');
  const data = await response.text();
  const tahun = [];
  const rpjmd = [];
  const iklh = [];
  const rows = data.split('\n').slice(1);
  rows.forEach(row => {
    const cols = row.split(';');
    tahun.push(cols[0]);
    rpjmd.push( parseFloat(cols[1]));
    iklh.push( parseFloat(cols[2]));
  });
  return { tahun, rpjmd, iklh };
}
