const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  console.log(document.body);
  //get random number beetwen 0-3
  const randomNumber = getRandomNum();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}

console.log("about to fetch a txt");
catchPoem()
  .then((poem) => {
    document.getElementById("poem").innerText = poem;
    console.log("yay");
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
//fetch txt file => text
async function catchPoem() {
  const response = await fetch("langkah.txt");
  return await response.text();
}
