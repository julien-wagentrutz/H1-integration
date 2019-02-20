//PAGE 2 : CARACTERISTIQUES techniques

const questions = document.querySelectorAll(".displayFlexGeneral .faqItem")
const answers = document.querySelectorAll(".faqItem .answer")

for (let i=0; i<questions.length; i++){
  questions[i].addEventListener(
  'click', function(){
    if (! this.classList.contains("is-open")){
      let temp = document.querySelector(".is-open")
      if(temp != null){
        temp.classList.remove("is-open")
      }
    }
    this.classList.toggle("is-open")
  })
}
