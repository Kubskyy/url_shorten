const btnHamburger = document.querySelector('#btnHamburger');
const fadeElems = document.querySelectorAll('.has-fade');
const nav = document.querySelector(".nav");
const body=document.querySelector('#body');

btnHamburger.addEventListener('click',()=>{
    if(nav.classList.contains('open')){
        nav.classList.remove('open');
        body.classList.remove('scroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else{
        nav.classList.add('open');
        body.classList.add('scroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});