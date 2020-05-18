const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//select 3 => deadlines, giveaway, h4
// karena h4 ini terdiri dari => day, hour, min, sec
//maka harus diselect semua/satupersatu
//untuk lebih memudahkan maka dibuatkan satu parent agar sekali saja
//dalam selectnya <div class="deadline-format">, semua (All)
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(giveaway, deadline, items);
//let futureDate = new Date(2020, 4, 12, 12, 20, 30);
//console.log(futureDate);

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date (tempYear, tempMonth, tempDay + 28, 11, 30, 0)
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const second = futureDate.getSeconds();
let month = months[futureDate.getMonth()];
let wday = weekdays[futureDate.getDay()];
let date = futureDate.getDate();

console.log(year, month, date);
giveaway.textContent = `giveaway ends on ${wday} ${date}
 ${month} ${year} - ${hours}:${minutes}:${second}`;

 const futureTime = futureDate.getTime();
 console.log(futureTime);

 function getRemainingTime(){
     const today = new Date().getTime();
     const t = futureTime - today
     //t in ms
     //console.log(futureTime,today,t);
     //1s =1000ms =
     //1m = 60s =
     //1hr = 60m =
     //1d = 24h = 8640000
     const oneDay = 24 * 60 * 60 * 1000
     const oneHour = 60 * 60 * 1000
     const oneMinute = 60 * 1000
     //calculate date
    let days = t / oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minute = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)
    //console.log(days,hours,minute,seconds);
    // set array
    const valueDate = [days,hours,minute,seconds]
    // tambah 0 didepan jika nilai dibawah 0
    function format(item){
        if (item < 10) {
            return (item = `0${item}`)
        } 
        return item;
    }
    // iterating dan tampilkan
    items.forEach(function(item,index){
        item.innerHTML = format(valueDate[index])
    })
    if(t<0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">sorry, 
        this give away has expired</h4>`
    }

 }
 //countdown
 let countdown = setInterval(getRemainingTime,1000)
 getRemainingTime()