let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}


showSlide(currentIndex);

//переключается каждые 5 сек
setInterval(nextSlide, 5000);



let cart
