const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//#f15025 => panjangnya 6 karakter
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', function (){
let hexColor = "#";
for (let i = 0; i<6; i++){
    //hexColor += hex[11]
    hexColor += hex[getRandomNum()]
    console.log(hexColor);
}
    console.log(hexColor);
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
});

function getRandomNum() {
    return Math.floor(Math.random() * hex.length)
}