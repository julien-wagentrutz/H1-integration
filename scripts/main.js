
const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.menu nav ul')

let figure;
let pos = 0;

hamb.addEventListener(
    'click',
    function () {
        nav.classList.toggle('show')
    }
)


