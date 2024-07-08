const slideIn = document.querySelectorAll('.slide-item');
const callback = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview')
        }
    });
}

const io = new IntersectionObserver(callback);
slideIn.forEach(el => io.observe(el))



