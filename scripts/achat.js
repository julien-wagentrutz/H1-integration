let pos = 0
const leftButton = document.querySelector('.arrowLeft')
const rightButton = document.querySelector('.arrowRight')
const sliderImages = document.querySelectorAll(".sliderContainer img")
const sliderContainer = document.querySelector(".sliderContainer")
let time = 3000
const step = -980
let play


function startSlider(){
  play=setInterval(function(){
    pos=(pos+1)%sliderImages.length
    console.log(pos)
    sliderContainer.style.left=pos*step+'px'
  },
  time
  )
}

function stopSlider(){
  clearInterval(play)
}

sliderContainer.addEventListener(
  'mouseover',
  stopSlider
)

sliderContainer.addEventListener(
  'mouseout',
  startSlider
)

leftButton.addEventListener(
  'click',
  function(){
    pos=(pos-1)
    if (pos<0) {
      pos= sliderImages.length-1
    }
    sliderContainer.style.left=pos*step+'px'
  }
)

rightButton.addEventListener(
  'click',
  function(){
    pos=(pos+1)
    if (pos>sliderImages.length-1) {
      pos= 0
    }
    sliderContainer.style.left=pos*step+'px'
  }
)

leftButton.addEventListener(
  'mouseover',
  stopSlider
)

leftButton.addEventListener(
  'mouseout',
  startSlider
)
rightButton.addEventListener(
  'mouseover',
  stopSlider
)

rightButton.addEventListener(
  'mouseout',
  startSlider
)