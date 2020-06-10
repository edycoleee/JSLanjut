//1. memanggil isi array-----------------------------------
const array1 = ["a", "b", "c"];
for (const element of array1) {
  console.log("isi contoh 1 :", element);
  document.write("<p>" + element);
}

//2. memanggil isi array
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log("isi contoh 2 :", value);
}

//3. You can use let instead of const too,
//if you reassign the variable inside the block.
const iterable1 = [10, 20, 30];
for (let value of iterable1) {
  value += 1;
  console.log("isi contoh 3 :",value);
}

//4. Iterating over a String
const iterable2 = 'boo';
for (const value of iterable2) {
    console.log('iterasi string :',value);
}

//5. Iterating over a TypedArray
const iterable3 = new Uint8Array([0x00, 0xff]);
for (const value of iterable3) {
    console.log(value);
}

//6. Iterating over a Map
const iterable4 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
//iterasi semua elemen
for (const entry of iterable4) {
    console.log('iterasi :',entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]
// iterasi value
for (const [key, value] of iterable4) {
    console.log('iterasi value :',value);
}
// 1
// 2
// 3

//4. Higher Order Function --------------------------
//fungtion seperti biasa-------------------------
function nyanyi() {
  console.log('hasil fungsi nyanyi()');
}
// panggil fungsi
nyanyi();

//function dengan callback atau------------------
// fungsi yang return memanggil fungsi lain 
function nyanyi1(callback) {
  console.log('hasil nyanyi1 =>callback');
  callback()
}
// disini memanggil nyanyi1() akan error 
//karena nyanyi1() dianggap tidak fungsi
function test1() {
  console.log("hasil test1");
}
nyanyi1(test1);
// disini akan return : hasilnyanyi1,hasiltest1

//function dengan callback modif1------------------
function nyanyi2(callback) {
  console.log('hasiln yanyi2');
  //if (callback instanceof Function)
  if (callback){
  callback()
  }
}
nyanyi2()
//disini akan return : hasilnyanyi2
function test2() {
  console.log("hasiltest2");
}
nyanyi2(test2);
// disini akan return : hasilnyanyi2,hasiltest2

//fungsi perkalian
function perkalian1 (x, y) {
  return x * y;
}
console.log(perkalian1 (4,5));
//20

//fungsi perkalian dengan high order function
function perkalian2 (faktorY) {
  return function(x){
      return(x * faktorY);
  } 
}
let dua = perkalian2(2);
let tiga = perkalian2(3);
console.log(dua);
//ƒ (x){return(x * faktorY);} 
// disini dua =>faktorY=>2 dan tiga =>faktorY=>3
console.log(dua(3));
//6
console.log(tiga(3));
//9

//fungsi perkalian dengan high order function=>Arrow
// jika return sebuah baris maka tanda kurung bisa dihilangkan// jika hanya return satu baris perintah =>return bisa dihilangkan
//sederhana sekali ??????????????????????????
function perkalian3 (faktorY) {
  return x =>x * faktorY; 
}
let dua1 = perkalian3(2);
let tiga1 = perkalian3(3);
console.log(dua);
//ƒ (x){return(x * faktorY);} 
// disini dua =>faktorY=>2 dan tiga =>faktorY=>3
console.log(dua1(3));
//6
console.log(tiga1(3));
//9
