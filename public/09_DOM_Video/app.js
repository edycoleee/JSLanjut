//MDN
//DOM content load

//select element video class="video-container"
//select <button class="switch-btn">
const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")
console.log(btn,video);

//listen =>click =>.slide
btn.addEventListener("click", function(){
    // tidak pakai togle karena ada tambahan fungsi pause dan play
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    } else{
        btn.classList.remove('slide')
        video.play()
    }
})


//preloader == select <div class="preloader">
const preloader = document.querySelector('.preloader')
window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader")
})