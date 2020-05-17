//1. contoh penulisan fungsi es5-----------------
// function setup() {
//     createCanvas(600, 400);
//     background(0);
//     let button = createButton('press');
//     button.mousePressed(changeBackground);
//     function changeBackground() {
//         background(random(255));
//     }
// }

//2. contoh penulisan fungsi es5------------------
// function setup() {
//     createCanvas(600, 400);
//     background(0);
//     let button = createButton('press');
//     button.mousePressed(()=>background(random(255)));
// }

//3. contoh penggunaan lain =>error------------------
// let counter1;
// function setup(){
//     noCanvas();
//     console.log(this);
//     counter1 = new Counter(100, 500);
// }
// class Counter{
//     constructor(start,wait){
//         this.count = start;
//         this.p = createP('');
//         console.log(this);
//         setInterval(countIt, wait);

//         function countIt(){
//             console.log(this);
//             this.count++;
//             this.p.html(this.count);
            
//         }
//     }
// }

//4. contoh counter by timer--------------------------
// let counter1;
// function setup(){
//     noCanvas();
//     console.log(this);
//     //setting counter 1
//     counter1 = new Counter(100, 500);
// }
// class Counter{
//     constructor(start,wait){
//         this.count = start;
//         this.p = createP('');
//         console.log(this);
//         setInterval(() =>{
//             console.log(this);
//             this.count++;
//             this.p.html(this.count);}, wait);
//     }
// }


//5. dengan OOP maka bisa 3 conter dijalankan pada satu kelas prototipe
// function setup(){
//     noCanvas();
//     console.log(this);
//     const counter1 = new Counter(100, 500);
//     const counter2 = new Counter(100, 700);
//     const counter3 = new Counter(500, 200);
// }
// class Counter{
//     constructor(start,wait){
//         this.count = start;
//         this.p = createP('');
//         console.log(this);
//         setInterval(() =>{
//             console.log(this);
//             this.count++;
//             this.p.html(this.count);}, wait);
//     }
// }


//6. dapat ditulis dengan sangat sederhana 
function setup(){
    noCanvas();
    console.log(this);
    const counter1 = new Counter(100, 500);
    counter1.start();
    const counter2 = new Counter(100, 700);
    counter2.start();
    const counter3 = new Counter(500, 200);
    counter3.start();
}
class Counter{
    constructor(start,wait){
        this.count = start;
        this.wait = wait;
        this.p = createP('');
    }
    start(){
        setInterval(() => this.countIt(), this.wait);
    }
    countIt(){
        this.count++;
        this.p.html(this.count);
    }
}
