const sliderImages = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');

//создадим функцию поиска нужного слайда в массиве
function activeSlide() {
    const slideIsActive = 'slider__item_active';    
    return slideIsActive;
}

let currentSlide = sliderImages.findIndex(activeSlide);

function removeCurrent() {
    sliderImages[currentSlide].classList.remove('slider__item_active');
};

function addCurrent() {
    sliderImages[currentSlide].classList.add('slider__item_active');
};

sliderArrowNext.addEventListener('click', () => {
    removeCurrent();
    currentSlide++;
    currentSlide = (currentSlide > sliderImages.length - 1) ? currentSlide = 0: currentSlide;
    addCurrent();
});

sliderArrowPrev.addEventListener('click', () => {
    removeCurrent();
    currentSlide--;
    currentSlide = (currentSlide < 0) ? currentSlide = sliderImages.length - 1: currentSlide;    
    addCurrent();
});
