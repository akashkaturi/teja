const burger=document.querySelector('.hamburger');
const nav=document.querySelector('.navlinks');
const navLinks=document.querySelectorAll('.navlinks li');

burger.addEventListener('click',()=>{
    nav.classList.toggle('open');
    burger.classList.toggle('toggle');
    navLinks.forEach((link,index)=>{
        if (link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation= `navLinkFade 1s ease forwards ${index/9}s`;
        }
    })

})


