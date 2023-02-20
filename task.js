const sliderImages = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');

let currentSlide = 1;

function removeCurrent() {
    sliderImages[currentSlide].classList.remove('slider__item_active');
};

function addCurrent() {
    sliderImages[currentSlide].classList.add('slider__item_active');
};

sliderArrowNext.addEventListener('click', () => {
    removeCurrent();
    currentSlide++;

    if (currentSlide > sliderImages.length - 1) {
        currentSlide = 0;
    }
    addCurrent();
})

sliderArrowPrev.addEventListener('click', () => {
    removeCurrent();
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = sliderImages.length - 1;
    }
    addCurrent();
});





