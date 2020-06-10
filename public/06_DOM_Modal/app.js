//select modal-btn, modal-overlay,close-btn
const mdlBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
console.log(mdlBtn, modal, closeBtn);

//listen for click event on modal-btn,close-btn
mdlBtn.addEventListener("click", function () {
  //when user click modal-btn add .OPEN-MODAL to modal-overlay
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  //when user click close-btn remove .OPEN-MODAL from modal-overlay
  modal.classList.remove("open-modal");
});
