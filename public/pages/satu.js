//1. var => functional scope--------------------------
//scope penggunaannya adalah dalam sebuah function
function setup() {
  console.log(x); //undefined
  //hoisting= terbentuk walau undefined
  var x = 100;
  console.log('nilai x : ',x); //100
}
setup();

//contoh var => scope dalam sebuah fungsi
function setup1() {
  for (var i = 0; i < 10; i++) {}
  console.log('nilai i : ',i);
}
setup1();


//2. let=> block scope---------------------------------
//let adalah deklarasi variable yang berlaku dalam sebuah scope saja, bentuk dan isinya bisa diubah.
let x1 = 10
console.log('nilai x1 1: ',x1);
x1 = 12
console.log('nilai x1 2 : ',x1);
function setup2(){
    // pemanggilan x1 disini akan error karena belum terdefinisi
    // scope lt hanya pada satu perintah eksekusi saja 
    //console.log(x1);
    let x1 = 100
    console.log('nilai x1 3 : ',x1);            
}
setup2()
//variable let akan hilang jika sudah berpindah block

//3. const => block scope-------------------------------
//setelah di definisikan tidak bisa diubah bentuknya tapi bisa diubah nilai didalam bentuk tersebut
const y = 10
console.log('nilai y1 1 : ',y);
// akan error jika diubah isi dalamnya karena dianggap mengubah semua isinya
//y = 12
console.log('nilai y1 2 : ',y);
//contoh const =>mengganti isi const bukan mengubah bentuknya
const particle ={x:100, y:222};
console.log(particle); //{x: 100, y: 222}
particle.x = 111;
console.log(particle); //{x: 111, y: 222} 
particle.z = 999;
//menambah dan mengunah isi const
console.log(particle); //{x: 111, y: 222, z: 999}


