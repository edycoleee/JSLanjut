
const navtogle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
console.log(navtogle,links);

navtogle.addEventListener("click", function(){
    console.log(links.classList);
    // mencari kelas yang mengandung "links"
    console.log("kelas mengandung random");
    console.log(links.classList.contains("mbuh"));
    console.log("kelas mengandung links");
    console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    //     console.log("remove");
    // } else {
    //     links.classList.add("show-links");
    //     console.log("add");
    // }
    links.classList.toggle("show-links")
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