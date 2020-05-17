// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select item
//image
const img = document.getElementById("person-img");
//author
const author = document.getElementById("author");
//job
const job = document.getElementById("job");
//info
const info = document.getElementById("info");
//btn prev
const prevBtn = document.querySelector(".prev-btn");
//btn next
const nextBtn = document.querySelector(".next-btn");
//btn random
const randomBtn = document.querySelector(".random-btn");
//starting item
let currentItem = 3;

//load initial item
// fungsi secara langsung
//   window.addEventListener("DOMContentLoaded", function () {
//       console.log('shake and brake');
//       const item = reviews[currentItem]
//       console.log(item);
//       img.src = item.img
//       job.textContent = item.job
//       author.textContent = item.name
//       info.textContent = item.text
//   })
//fungsi yang lebih sederhana
//fungsi listener untuk jalankan showPerson(currentItem)
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
// fungsi menampilkan person utk menganti textContect
function showPerson(person) {
  const item = reviews[currentItem];
  console.log(item);
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
}
console.log(nextBtn,prevBtn);
//show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem>reviews.length - 1) {
        currentItem = 0        
    }
    console.log(currentItem);
    showPerson()
})
//show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem<0) {
        currentItem = reviews.length - 1        
    }
    console.log(currentItem);
    showPerson()
})
//show random person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
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