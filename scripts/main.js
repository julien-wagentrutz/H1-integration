const figures = document.querySelectorAll('.figure-home');
let i = figures.length-1;

const int = setInterval(function () {
    if(i == 0){
        i = figures.length-1
        for(let j = 0; j<=figures.length;j++){
            figures[j].style.opacity = '0.9'
        }
    }
    figures[i].style.opacity = '0';
        i--
    }, 5000)