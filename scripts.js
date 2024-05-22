let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    showSlides();
    setInterval(() => {
        slideIndex++;
        showSlides();
    }, 3000); // Change slide every 3 seconds
});
