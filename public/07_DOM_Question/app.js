// //METODE 1---------------------------TRAVERSING THE DOM
// // select all element 3 button
// const btns = document.querySelectorAll(".question-btn")
// console.log(btns);
// //event listener all 3 button
// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e){
//         // ambil parent.parent
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement
//         //modifikasi dom with togle
//         question.classList.toggle("show-text")
//     })
// });

//METODE 2---------------------------------SELECTOR INSIDE ELEMENT
// const question = document.querySelectorAll(".question");
// console.log(question);
// question.forEach(function (quest) {
//   console.log(quest);
//   const btn = quest.querySelector(".question-btn");
//   console.log(btn);
//   btn.addEventListener("click", function () {
//     //modifikasi dom with togle
//     quest.classList.toggle("show-text");
//     console.log("show-text");
//   });
// });

//METODE 3--------------------------------------
const question = document.querySelectorAll(".question");
console.log(question);
question.forEach(function (quest) {
  console.log(quest);
  const btn = quest.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    question.forEach(function (item) {
      if (item !== quest) {
        item.classList.remove("show-text");
      }
    });
    //modifikasi dom with togle
    quest.classList.toggle("show-text");
    console.log("show-text");
  });
});
