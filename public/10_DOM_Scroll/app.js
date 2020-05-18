// element.getbounding method to return the size
//of element and its position relative to the viewport

//pageYOffset its read only windows property that return the number
// of pixel document has been scrolled vertically



//1. set date
// untuk menampilkan tahun pada footer 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
console.log(date, new Date().getFullYear());

//close link
// untuk menampilkan menutup menu pada
// saat halaman web posisi kecil (menu scroll)
//<button class="nav-toggle">
const navToggle = document.querySelector(".nav-toggle");
//<div class="link-container">
const linkContainer = document.querySelector(".links-container");
//<ul class="links"></ul>
const links = document.querySelector(".links");
console.log(navToggle, linkContainer, links);
//membuat menu yang dinamik, seat menambah kan atau mengurangi
// menu akan tetep tampil dinamis
// karena yang dihitung adalah linksHeight =>getBoundingClientRect
navToggle.addEventListener("click", function () {
  //linkContainer.classList.toggle("show-links")
  //console.log(linkContainer.classList);
  const containerHeight = linkContainer.getBoundingClientRect().height;
  //return object
  const linksHeight = links.getBoundingClientRect().height;
  console.log(containerHeight, linksHeight);
  if (containerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

//fixed navbar
//navbar saat dilakukan scroll kebawah akan hilang 
// maka perlu dibuat navbar fix dengan bacground putih saat
// scroll kebawah melebihi menu yg ada terscroll keatas
// dan menambah button back to home page saat sroll sampai bawah
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
//console.log(navbar,topLink);
// mengambil nilai saat scroll
window.addEventListener("scroll", function () {
  const scrolHeight = window.pageYOffset;
  //console.log(scrolHeight);
  const navHeight = navbar.getBoundingClientRect().height;
  // tinggi nav saat scrol 82px
  //console.log(navHeight,scrolHeight);
  if (scrolHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrolHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//jika kita klik link maka halaman akan tampil menuju link tsb
//tapi tidak pas pada judulnya diatas, jadi harus dilakukan 
// penyesuaian agar pas halamannnya dengan judul berada 
// pada posisinya
//smooth scroll
// select (scroll-lick)
const scrollLink = document.querySelectorAll(".scroll-link")
console.log(scrollLink);

scrollLink.forEach(function(link){
  link.addEventListener("click", function(e){
    //prevent default ( menghilangkan default perintah HTML pd scroll-link)
    e.preventDefault();
    // navigate to spesific spot
    // arahkan ke tempat tertentu saat di klik href
    //const id = e.currentTarget.getAttribute("href");
    //console.log(id);
    //slice extract a section without modifiying original string
    // #services => services (slice 1 karackter string)
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id)
    // cari nilai offset top masing2 element by id 
    // home 0, about 1285,services 2047,tours 2810
    // offsetTop - a number, representing top position of
    // the element in pixel
    // calculate height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height
    //cari ture/false saat fixed-nav, nav bar yg ikut scroll kebawah
    // tiap2 punya nilai offset sendiri2 saat true/false
    // home 0/0, about 969/1051,services 1744/1826,tours 2519/2601
    const fixNav = navbar.classList.contains("fixed-nav")
    let position = element.offsetTop
    console.log(id,position,navHeight,containerHeight,fixNav);

    if (!fixNav){
      position = position - navHeight 
    }
    if (navHeight > 81){
      position = position + containerHeight - 110
    }


    window.scrollTo({
      left :0,
      top: position,
    })
    linkContainer.style.height=0;
  })
})





//select link
