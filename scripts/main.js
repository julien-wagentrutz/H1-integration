const figures = document.querySelectorAll('.figure-home');
const points = document.querySelectorAll('.pagination-figure ul li')
const figureExp = document.querySelectorAll('.text-techHomePod div')
const sliders = document.querySelectorAll('.text-siri-content li');

let pos = 0;



function setPosition(){
    if(document.querySelectorAll('.active').length > 2){
        document.querySelector('.figure .active').classList.remove('active')
        document.querySelector('.pagination-figure .active').classList.remove('active')
        document.querySelector('.text-techHomePod .active').classList.remove('active')
    }
    figures[pos].classList.add('active')
    points[pos].classList.add('active')
    figureExp[pos].classList.add('active')
}


for(let j = 0; j< points.length; j++){
    points[j].addEventListener(
        'click',
        function () {
            pos = j;
            setPosition()
        }
    )
}

const figure = setInterval(function () {
    setPosition()
    if(pos == figures.length-1){
        pos=0
    }
    else{
        pos++
    }
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
