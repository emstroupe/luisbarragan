// MOBILE NAV
const mysitenav = document.querySelector('.site-header .site-nav');
const mymenubutton = document.querySelector('.menu-button');
mymenubutton.onclick = function () {
    mysitenav.classList.toggle('active');
}

// TIMELINE SWITCHER
// NEED TO GET ALL TIMELINE DATE LI ELEMENTS
// NEED TO GET ALL TIMELINE EVENT LI ELEMENTS
// EACH TIMELINE DATE LI A NEEDS AN ONCLICK
// ON EACH ONCLICK WE NEED TO
// 1. REMOVE ALL ACTIVE CLASSES FROM DATE LI's
// 2. REMOVE ALL ACTIVE CLASSES FROM DATE LI's
// 1. ADD CLASS "ACTIVE" TO THE DATE LI
// 2. ADD CLASS "ACTIVE" TO THE EVENT LI

// NEED A LOOP (QuerySelectorALL)


var DateNavItems = document.querySelectorAll('.timeline-date li a');
var DateEventItems = document.querySelectorAll('.timeline-event li');
for (var i = 0, len = DateNavItems.length; i < len; i++) {
    DateNavItems[i].addEventListener('click', function (e) {
        removeAll();
        this.classList.add('active');
        var target = this.getAttribute('data-date');
        document.getElementById(target).classList.add('active');
        console.log(target);
        e.preventDefault();
    });
}

function removeAll() {
    for (var j = 0, jlen = DateNavItems.length; j < jlen; j++) {
        DateNavItems[j].classList.remove('active');
        console.log("hi!");
    };
    for (var k = 0, klen = DateEventItems.length; k < klen; k++) {
        DateEventItems[k].classList.remove('active');
        console.log("bye!");
    }
}
