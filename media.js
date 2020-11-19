// swiper-slide
// swiper-wrapper
// swiper-container

// slide
// wrapper
// container

let wrapper = document.querySelector('#wrapper')
let container = document.querySelector('#container')
let slides = document.querySelectorAll('.slide')

// const isMobile = matchMedia('(max-width:885px)').matches;



let reportWindowSize = function() {
    if (window.innerWidth < 885) {
        wrapper.classList.add('swiper-wrapper')
        container.classList.add('swiper-container')
        slides.forEach(element => element.classList.add('swiper-slide'));
        console.log('mobile')
    } else {
        wrapper.classList.remove('swiper-wrapper')
        container.classList.remove('swiper-container')
        slides.forEach(element => element.classList.remove('swiper-slide'));
        console.log('desktop')
    }
}

window.onresize = reportWindowSize;
window.onload = reportWindowSize;