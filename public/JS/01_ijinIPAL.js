//select class="about" 
//select target semua (3) button class="tab-btn" target id
//select semua (3) article class ="conten"
const about = document.querySelector(".ijin_ipal")
const btns = document.querySelectorAll(".tab-btn")
const articles = document.querySelectorAll(".content")
console.log(about,btns,articles);

//event listener about, parent => target id
about.addEventListener("click", function(e){
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id
    if (id) {
        // jika active from other id  
        btns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        //hide other article
        articles.forEach(function(article){
            article.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})
