

const nav = document.getElementById('navigation');
const navToggle = document.getElementById('navigationToggler');

navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (nav.classList.contains('main-nav--closed')) {
        nav.classList.add('main-nav--opened');
        nav.classList.remove('main-nav--closed')
    } else {
        nav.classList.add('main-nav--closed')
        nav.classList.remove('main-nav--opened');

    }
});