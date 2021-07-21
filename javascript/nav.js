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


var i = 0;
function read(x){
    
    let moreField=".more"+String(x);
    let imageField=".img"+String(x);
    let dotsField=".dots"+String(x);
    let text=".read"+String(x);
    console.log(text);
    console.log(moreField);
    console.log(imageField);
    console.log(dotsField);
    if (x === 5) {
         if (!i) {
				document.querySelector(moreField).style.display = 'inline';
				document.querySelector(dotsField).style.display = 'none';
				document.querySelector(text).innerText = 'Read Less';
				i = 1;
			} else {
				document.querySelector(moreField).style.display = 'none';
				document.querySelector(dotsField).style.display = 'inline';
				document.querySelector(text).innerText = 'Read More';

				i = 0;
			}
	}
    else{
		if (!i) {
			document.querySelector(moreField).style.display = 'inline';
			document.querySelector(imageField).style.display = 'block';
			document.querySelector(dotsField).style.display = 'none';
			document.querySelector(text).innerText = 'Read Less';
			i = 1;
		} else {
			document.querySelector(moreField).style.display = 'none';
			document.querySelector(imageField).style.display = 'none';
			document.querySelector(dotsField).style.display = 'inline';
			document.querySelector(text).innerText = 'Read More';

			i = 0;
		}
	}
    
}