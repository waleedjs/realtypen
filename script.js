function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
// for review slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.review-slide');
const dotsContainer = document.querySelector('.dots-container');

function createDots() {
    dotsContainer.innerHTML = '';
    const slidesPerView = window.innerWidth < 768 ? 1 : 3;
    const numberOfDots = Math.ceil(slides.length / slidesPerView);

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentSlideIndex = i * slidesPerView;
            showSlides();
        });
        dotsContainer.appendChild(dot);
    }
}
function showSlides() {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
    });
 const slidesPerView = window.innerWidth < 768 ? 1 : 3;
    let start = currentSlideIndex;
    let end = start + slidesPerView;
    if (end > slides.length) {
        end = slides.length;
    }
for (let i = start; i < end; i++) {
        slides[i].style.display = 'block';
    }

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === Math.floor(currentSlideIndex / slidesPerView)) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    const slidesPerView = window.innerWidth < 768 ? 1 : 3;
    currentSlideIndex += slidesPerView;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    createDots();
    showSlides();
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

window.addEventListener('resize', () => {
    createDots();
    showSlides();
});

// for update years
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});