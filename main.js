/*=============toggle icon navbar============*/

let newIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*======================= scroll section active link ===========================*/

let sections = document.querySelectorAll('section')
let navlinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.foreach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(link => {
                link.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };
    });

    /*=========================== sticky navbar =======================================*/
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    

    /*============= remove toggle icon and navbar============*/

    MenuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    
};
/*============= scroll reveal============*/
ScrollReveal({ 
    distance: '80',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin:'buttom'});
ScrollReveal().reveal('.nome-contact h1, .about-img,', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content,', { origin:'right'});


/*============= Typed Js============*/

const typed = new typed ('.multiple-text', {
    strings:  ['Frontend Developer','webDesigner','Php Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

});