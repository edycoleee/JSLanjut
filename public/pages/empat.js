//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//1. Create an Array-----------------------------------------lenght
let fruits = ["Apple", "Banana"];
console.log("panjang array :", fruits.length); // 2

//2. Access an Array item using the index position
let first = fruits[0]; // Apple
let last = fruits[fruits.length - 1]; // Banana

//3.Loop over an Array-----------------------------------------loop
fruits.forEach(function (item, index, array) {
  console.log(item, index);
}); // Apple 0  // Banana 1

//4. array operation ------------------------------------------
//Add an item to the end of an Array
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

//Remove an item from the end of an Array
let last1 = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

//Remove an item from the beginning of an Array
let first1 = fruits.shift(); // remove Apple from the front
// ["Banana"]

//Add an item to the beginning of an Array
let newLength1 = fruits.unshift("Strawberry");
// add to the front
// ["Strawberry", "Banana"]

//Find the index of an item in the Array
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]
let pos1 = fruits.indexOf("Banana");
// 1

//5.Remove an item by index position-----------------------remove by pos
let removedItem = fruits.splice(pos1, 1);
// this is how to remove an item
// ["Strawberry", "Mango"]

//Remove items from an index position
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]
let pos = 1;
let n = 2;
let removedItems = vegetables.splice(pos, n);
// this is how to remove items,
//n defines the number of items to be removed,
// starting at the index position specified
//by pos and progressing toward the end of array.
console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems);
// ["Turnip", "Radish"]

//6. Copy an Array-----------------------------------------copy array
let shallowCopy = fruits.slice();
// this is how to make a copy
// ["Strawberry", "Mango"]

//7. Accessing array elements--------------------------------------
function setup1() {}
let arr = [
  "this is the first element",
  "this is the second element",
  "this is the last element",
];
console.log(arr[0]); // logs 'this is the first element'
console.log(arr[1]); // logs 'this is the second element'
console.log(arr[arr.length - 1]);
// logs 'this is the last element'

//8. Relationship between length and numerical properties---------
const fruitsX = [];
fruitsX.push("banana", "apple", "peach");
console.log(fruitsX.length); // 3
//When setting a property on a JavaScript array
//when the property is a valid array index and
//that index is outside the current bounds of the array,
//the engine will update the array's length
fruitsX[5] = "mango";
console.log(fruitsX[5]); // 'mango'
console.log(Object.keys(fruitsX)); // ['0', '1', '2', '5']
console.log(fruitsX.length); // 6
//Increasing the length.
fruitsX.length = 10;
console.log(fruitsX);
// ['banana', 'apple', 'peach', <7 empty items>]
console.log(Object.keys(fruitsX)); // ['0', '1', '2', '5']
console.log(fruitsX.length); // 10
console.log(fruitsX[8]); // undefined
//Decreasing the length property does,
//however, delete elements.
fruitsX.length = 2;
console.log(Object.keys(fruitsX)); // ['0', '1']
console.log(fruitsX.length); // 2

//9. MAP MAP MAP------------menghasilkan array baru---------------
// map  ke array baru dengan *2 semua isi array1
const array1 = [1, 4, 9, 16];
//9a. pass a function to map
const map1 = array1.map((x) => x * 2);
console.log("map 1 :", map1);
// expected output: Array [2, 8, 18, 32]

//array
let arraySatu = [3, 4, 5, 6, 7];
console.log(arraySatu); //(5) [3, 4, 5, 6, 7]
// function untuk mengalikan x dengan 2
function perkalianDua(x) {
  return x * 2;
}
//9b. map array kedalam function
arraySatu.map(perkalianDua);
console.log("map 2 :", arraySatu); //(5) [3, 4, 5, 6, 7]
// kenapa tidak berubah, karena fungsi map
//adalah membentuk array baru, tidak bisa mengubah
//9c. isi array yang di map
let arrayDua = arraySatu.map(perkalianDua);
console.log("map 3 :", arrayDua); //(5) [6, 8, 10, 12, 14]
//9d. BISA JUGA SEPERTI DIBAWAH INI
arraySatu = arraySatu.map(perkalianDua);
console.log("map 4 :", arraySatu); //(5) [6, 8, 10, 12, 14]

arraySatu = [3, 4, 5, 6, 7];
console.log(arraySatu); //(5) [3, 4, 5, 6, 7]
//9e.arraySatu = arraySatu.map(function perkalianDua(x){ return x * 2});
arraySatu = arraySatu.map((x) => x * 2);
console.log("map *2 :",arraySatu); //(5) [6, 8, 10, 12, 14]

//10. FILL FILL FILL ----------------------------------------
arraySatu = [3, 4, 5, 6, 7];
console.log("array 1 :",arraySatu); //(5) [3, 4, 5, 6, 7]
//10a. mengisi array dengan 0
arraySatu.fill(0);
console.log("array 1 diisi 0:",arraySatu); //(5) [0, 0, 0, 0, 0]
//10b. mengisi array dengan random
arraySatu.fill(Math.random());
console.log("array 1 diisi random:",arraySatu);
//(5) [0.7450080919527942, 0.7450080919527942, 0.7450080919527942, 0.7450080919527942, 0.7450080919527942]
arraySatu.fill(Math.random());
console.log(arraySatu);
//10.c sebenarnya fill adalah seperti dibawah HOF dari map
arraySatu = arraySatu.map((x) => Math.random());
console.log("array 1 dg HOF:",arraySatu);
//(5) [0.08096583133978208, 0.8196404554222874, 0.6830320859781664, 0.2895622500950301, 0.9713114632111008]
// penyederhanaan dengan menghilangkan x dengan anonymous
arraySatu = arraySatu.map(() => Math.random());
console.log(arraySatu);
//10.d membuat array kosong (3)
arraySatu = Array(3);
console.log("array kosong:",arraySatu); //(3) [empty × 3]
// mengisi dengan 0
arraySatu.fill(0);
console.log("array diisi 0:",arraySatu); //(3) [0, 0, 0]
// mengisi dengan bilangan random
arraySatu = arraySatu.map(() => Math.random());
console.log("array diisi random:",arraySatu);
//(3) [0.9922775631814911, 0.7371527151050881, 0.36600829614590746]

//10.e membuat 100 array dengan isi random---------------------------------
arrayDua = Array(100).fill().map(Math.random);
console.log("100 array diisi random:",arrayDua);
// sederhana banget????????????????????????
