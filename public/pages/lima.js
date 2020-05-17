//array val
let val = [2, 3, 4, 5, 6, 7];

//REDUCER REDUCER REDUCER REDUCER REDUCER REDUCER REDUCER REDUCER REDUCER
//1. contoh menjumlahkan isi dalam array manual
//variable sum
let sum = 0;
//ambil data dalam array satu persatu
//kemudian jumlahkan dengan for loop
for (let i = 0; i < val.length; i++) {
  sum += val[i];
}
console.log("jumlah dg for :", sum); //27

//2. contoh menjumlahkan isi array dengan
//bentuk for loop yang berbeda dan sederhana
//variable sum
sum = 0;
//ambil data dalam array satu persatu
//kemudian jumlahkan
for (let vals of val) {
  sum += vals;
}
console.log("jumlah dg for ringkas :", sum); //27

//3. jumlahkan => reducer : accumulator , currrent value
//array val
vals = [2, 3, 7, 5, 6, 4];
//function sum----------------------------------------------
function jumlahkan(acc, val) {
  console.log("nilai acc : ", acc);
  return acc + val;
}
//3a. jumlahkan semua nilai array
let answer = vals.reduce(jumlahkan);
console.log("jawaban1", answer);
//3b. jumlahkan semua isi array dan diawali angka 10
let answer2 = vals.reduce(jumlahkan, 10);
console.log("jawaban2", answer2);
//3c. fungsi penjumlahan dengan arrow fungsi dan diawali angka 10
let jawaban = vals.reduce((acc, val) => acc + val, 10);
console.log("jawaban 3", jawaban);
//3d. fungsi penjumlahan dengan arrow fungsi-------------------
let sum1 = vals.reduce((acc, val) => acc + val);
console.log("jawaban 4", sum1);
// reduce memulai nilai dengan nilai array pertama sampai terakhir

//4. fungsi penjumlahan dengan arrow fungsi
function findMax(acc, val) {
  //jika nilai val> acc maka acc = val
  if (val > acc) {
    acc = val;
  }
  //return accumulator
  return acc;
}
//4a. jalankan fungsi pencarian max
let biggest = vals.reduce(findMax);
console.log("nilai terbesar", biggest);

//4b. penyerdhanaan dengan boolean exp (a>b) ? a:b
// jika a>b ,true maka a, false maka b
// fungsi pencarian max dengan arrow fungsi---------------------------
let biggest1 = vals.reduce((a, b) => (b > a ? b : a));
console.log("nilai terbesar2", biggest1);

//4c. jika a>b ,true maka a, false maka b
let biggest2 = vals.reduce((a, b) => (b > a ? b : a), 10);
console.log("nilai terbesar3", biggest2);

//4d. jika a>b ,true maka a, false maka b
let biggest3 = vals.reduce((a, b) => (b > a ? b : a), 5);
console.log("nilai terbesar4", biggest3);

//5. contoh jumlahkan array
const array1 = [1, 2, 3, 4];
//sum
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER
//array
vals = [5, 4, 9, 2, 4];

//1. fungsi filter mengecek genap atau ganjil dg output true/false
function isEven(num) {
  return num % 2 == 0;
}
// filter : jika genap = true maka simpan ke array baru
// replace nilai array lama menjadi baru genap
vals = vals.filter(isEven);
console.log("filter genap dg fungsi :", vals); //(3) [4, 2, 4]

//2. disederhakan dengan menggunakan arrow
vals = [5, 4, 9, 2, 4];
(x) => x % 2 == 0;
vals = vals.filter(isEven);
console.log("filter genap dg filter :", vals); //(3) [4, 2, 4]

//3. filter bilangan genap disederhakan menjadi satu baris
vals = [5, 4, 9, 2, 4];
(x) => x % 2 == 0;
vals = vals.filter((x) => x % 2 == 0);
console.log("filter genap satu baris :", vals); //(3) [4, 2, 4]

//4. filter bilangan ganjil => ganjil = true  =>simpan
vals = [5, 4, 9, 2, 4];
(x) => x % 2 == 0;
vals = vals.filter((x) => x % 2 == 1);
console.log("filter ganjil satu baris :", vals); //(2) [5, 9]

//5. filter bilangan => undefined = false =>simpan
vals = [5, 4, undefined, 2, 4];
(x) => x % 2 == 0;
vals = vals.filter((x) => x !== undefined);
console.log("filter undefined :", vals); //(4) [5, 4, 2, 4]

//6. filter bilangan ganjil => ganjil = true  =>simpan
vals = [5, 4, 9, 2, 4];
(x) => x % 2 == 0;
vals = vals.filter((x) => x % 2 == 1);
console.log("filter ganjil :", vals); //(2) [5, 9]

//7. filter bilangan ganjil => ganjil = true  =>simpan
vals = [5, 4, 9, 2, 4, 10, 200, 3000];
(x) => x % 2 == 0;
vals = vals.filter((x) => x % 2 == 1);
console.log("filter ganjil :", vals); //(2) [5, 9]

//8. filter string
let a = "It was  was darn and stormy night";
//8.a split by " ", sebuah space
let words = a.split(" ");
console.log('split spasi :',words); //(8) ["It", "was", "", "was", "darn", "and", "stormy", "night"]
//8.b split dan filter dengan kata yg memiliki panjang >1
let akhir = a.split(" ").filter((word) => word.length);
console.log("split spasi dan empty lenght", akhir); //(7) ["It", "was", "was", "darn", "and", "stormy", "night"]
//8c.  split dan filter dengan kata yg memiliki panjang >3
akhir = a.split(" ").filter((word) => word.length > 3);
console.log("split spasi dan panjang huruf 3:", akhir); //(3) ["darn", "stormy", "night"]

//9. contoh filter huruf>6
const words1 = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words1.filter((word) => word.length > 6);
console.log('filter 6 huruf :', result);
// expected output: Array ["exuberant", "destruction", "present"]

//10. contoh filter fruits mengandung  'ap'
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};
console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

//11. filter bilangan >= 10
function isBigEnough(value) {
  return value >= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log('filter bilangan >10 :',filtered);
// filtered is [12, 130, 44]

//filter bilangan >= 8
filtered = [12, 5, 8, 130, 44].filter((x) => x >= 8);
console.log('filter bilangan >=8 :',filtered);
// filtered is (4) [12, 8, 130, 44]
