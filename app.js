// header scroll Sticky 
const header = document.querySelector('header');
window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 100)
});
// Scroll Anchord navlinks a 
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Highlight active section on scroll
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));

            if (section.offsetTop - 60 <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach(nav => nav.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});

// Mobile Menu Toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');
 
 menuToggle.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     // condition change icon
     if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
       }
 });
 // Remove mobile menu when clicking on a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Slider Functionality
 const slides = document.querySelectorAll('.slide');
 const dots = document.querySelectorAll('.dot');
 let currentSlide = 0;
 let slideInterval;
 
 // Initialize slider
 function initSlider() {
     showSlide(currentSlide);
     slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
 }
 
 // Show specific slide
 function showSlide(n) {
     slides.forEach(slide => slide.classList.remove('active'));
     dots.forEach(dot => dot.classList.remove('active'));
     
     slides[n].classList.add('active');
     dots[n].classList.add('active');
     currentSlide = n;
 }
 
 // Next slide
 function nextSlide() {
     currentSlide = (currentSlide + 1) % slides.length;
     showSlide(currentSlide);
 }
 
 // Previous slide
 function prevSlide() {
     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
     showSlide(currentSlide);
 }
 
 // Dot click event
 dots.forEach((dot, index) => {
     dot.addEventListener('click', () => {
         clearInterval(slideInterval);
         showSlide(index);
         slideInterval = setInterval(nextSlide, 4000);
     });
 });
 
 // Pause slider on hover
 const slider = document.querySelector('.slider');
 slider.addEventListener('mouseenter', () => {
     clearInterval(slideInterval);
 });
 
 slider.addEventListener('mouseleave', () => {
     slideInterval = setInterval(nextSlide, 4000);
 });
 
 // Initialize slider on page load
 window.addEventListener('load', initSlider);