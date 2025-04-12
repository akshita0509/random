let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['CSE(AI AND ROBOTICS) Student at VIT Chennai','Frontend developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script Loaded");
    let skillBars = document.querySelectorAll(".fill");
    skillBars.forEach(bar => {
        let width = bar.getAttribute("data-width");
        console.log(`Setting width for ${bar.classList} to ${width}`); 
        bar.style.width = width;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let skillBars = document.querySelectorAll(".fill");
    
    function animateSkills() {
        let skillsSection = document.querySelector(".skills");
        let sectionPosition = skillsSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            skillBars.forEach(bar => {
                let width = bar.getAttribute("data-width");
                bar.style.width = width;
                bar.style.transition = "width 1.5s ease-in-out";
            });
        }
    }

    window.addEventListener("scroll", animateSkills);
});
// we added addEventListener
document.addEventListener("DOMContentLoaded", function() {
    function revealEducation() {
        let section = document.querySelector(".education-section");
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight / 1.2;

        if (position < screenHeight) {
            section.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealEducation);
});
