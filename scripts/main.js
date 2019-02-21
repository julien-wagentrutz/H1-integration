
const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.menu nav ul')

let figure;

hamb.addEventListener(
    'click',
    function () {
        nav.classList.toggle('show')
    }
)


