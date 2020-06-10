// ide dasarnya adalah melakukan slider
//.slide{transform: translateX(100%);} 
// minus bergerak kiri dan + bergerak ke kanan
// sebenarnya semua gambar tersebut digelar secara horisontal
// gb1 0%, gbr2 100%, gbr3 200% dan gbr3 300%
// dengan JS tinggal memainkan nilai tersebut

//1. Selection
const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")
//console.log(slides,nextBtn,prevBtn);


//2. selection for multiple element
slides.forEach(function(slide,index){
    slide.getElementsByClassName.left = `${index * 100}%`
})
//console.log(slides);

//3. init data
let counter = 0;

//4.event listener
nextBtn.addEventListener("click", function(){
    console.log('next');
    counter++;
    carousel()
})
prevBtn.addEventListener("click", function(){
    counter--;
    carousel()
})

//5. function carosel menggunakan pendekatan slider
// function carousel(){
//     //5a. slide mentok
//     if (counter === slides.length){
//         counter = 0
//     }
//     if (counter < 0){
//         counter = slides.length-1
//     }
//     slides.forEach(function(slide){
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     })
// }

//5. function carosel menggunakan pendekatan button
function carousel(){
if (counter < slides.length - 1){
    nextBtn.style.display = "block";
} else {
    nextBtn.style.display = "none"
}
if (counter > 0){
    prevBtn.style.display = "block"
} else {
    prevBtn.style.display = "none"
}

slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`
})
}
prevBtn.style.display = "none"