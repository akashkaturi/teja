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

window.addEventListener('scroll',()=>{
    var scroll=document.querySelector('.scrollTop');
    if(screen.width>768){
    scroll.classList.toggle("active",window.scrollY>250);
    }
    else{
        
         scroll.classList.toggle('active', window.scrollY > 150);
    }
})

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
