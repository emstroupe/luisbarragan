// MOBILE NAV
const mysitenav = document.querySelector('.site-header .site-nav');
const mymenubutton = document.querySelector('.menu-button');
mymenubutton.onclick = function () {
    mysitenav.classList.toggle('active');
}
