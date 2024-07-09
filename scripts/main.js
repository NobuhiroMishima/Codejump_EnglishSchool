const slideIn = document.querySelectorAll('.slide-item');
const fadeIn = document.querySelectorAll('.fade-in-item');

const callback = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview')
        }
    });
}

const io = new IntersectionObserver(callback);
slideIn.forEach(el => io.observe(el));
fadeIn.forEach(el => io.observe(el));

const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.head-nav');
const mainContent = document.querySelectorAll('.section-jump');

const menuOpen = function(){
    nav.classList.toggle('open');
}

hamburgerMenu.addEventListener('click', menuOpen);
mainContent.forEach(el => el.addEventListener('click', menuOpen));