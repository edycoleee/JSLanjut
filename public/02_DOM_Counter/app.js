//set initial variable
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(value,btns);

//listen 3 button
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        console.log(styles.value);
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }
        if (count>0){
            value.style.color="green";
        }
        if (count<0){
            value.style.color="red";
        }
        if (count===0){
            value.style.color="#222";
        }
        value.textContent = count;
    })
    
})

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