const months = ["March", "Jan", "Feb", "Dec"];

//1. sort menurut sistem by string karena data string
months.sort();
console.log('sort by sistem :',months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

//2. sort menurut sistem by num karena data angka
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log('sort by sistem :',array1);
// expected output: Array [1, 100000, 21, 30, 4]

//3. sorting array
let vals = [5, 3, 7, 9, 1];
console.log(vals); //(5) [5, 3, 7, 9, 1]
vals.sort();
console.log('sort by sistem :',vals); //(5) [1, 3, 5, 7, 9]

vals = [5, 3, 7, 9, "hello", 1, "a", "aku"];
console.log(vals); //(8) [5, 3, 7, 9, "hello", 1, "a", "aku"]
vals.sort();
console.log('sort by sistem :',vals); //(8) [1, 3, 5, 7, 9, "a", "aku", "hello"]

//4. sorting object
let vals1 = [
    { x: 2, y: 10 },
    { x: 5, y: 6 },
];
function compare1(a, b) {
    return a.y - b.y;
}
console.log(vals1); //0: {x: 2, y: 10} 1: {x: 5, y: 6}
vals1.sort(compare1);
console.log('sort by sistem :',vals1); //0: {x: 5, y: 6} 1: {x: 2, y: 10}

//5. sorting string
let a = "It was  was darn and stormy night";
//5a. split by " ", sebuah space
let words = a.split(" ");
console.log('split by spasi :',words);
//(8) ["It", "was", "", "was", "darn", "and", "stormy", "night"]
//5b. sorting dari string dg terpanjang
words.sort((a, b) => b.length - a.length);
console.log('sort yg terpanjang :',words);
//(8) ["stormy", "night", "darn", "was", "was", "and", "It", ""]
//sorting dari string dg terpendek
words.sort((a, b) => a.length - b.length);
console.log('ssort yg terpendek :',words);
//(8) ["", "It", "was", "was", "and", "darn", "night", "stormy"]


//menulis dalam html dari JS-------------------------------------
//1. tulis langsung di paling bawah kode
document.write("dua");

//2.  create element <p>This is a paragraph</p> to body
var para = document.createElement("P");
// Create a <p> element
para.innerText = "This is a paragraph"; // Insert text
document.body.appendChild(para); // Append <p> to <body>

//3. create element <p>This is a paragraph</p> to div id="myDIV"
var para = document.createElement("P"); // Create a <p> element
para.innerHTML = "This is a paragraph pada my div"; // Insert text
document.getElementById("myDIV").appendChild(para);
// Append <p> to <div> with id="myDIV"

// lihat tampilannya pada halaman HTML