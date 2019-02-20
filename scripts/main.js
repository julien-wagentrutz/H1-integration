const figures = document.querySelectorAll('.figure-home');
const sliders = document.querySelectorAll('.text-siri-content li');
let i = figures.length-1;




const carac = setInterval(function () {
    if(i == 0){
        i = figures.length-1
        for(let j = 0; j<figures.length;j++){
            figures[j].style.opacity = '0.9'
        }
    }
    figures[i].style.opacity = '0';
        i--
    }, 5000)

let count = 0;
const slide = setInterval(function () {
    if(count == sliders.length){
        count = 0
        sliders[count].style.opacity = '0.9'
        sliders[sliders.length-1].style.opacity = '0'
    }
    else if(count == 0){
        sliders[count].style.opacity = '0.9'
        sliders[sliders.length-1].style.opacity = '0'
    }
    else{
        sliders[count].style.opacity = '0.9'
        sliders[count-1].style.opacity = '0'
    }
    count++
}, 2000)




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
