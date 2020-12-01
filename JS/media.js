// let wrapper = document.querySelector('.wrapper');
// let container = document.querySelector('.container');

// let slides = document.querySelectorAll('.slide');

// // for (i = 0; i < 4; i++) {
// //     slides.push(document.querySelector('#slide' + i))
// //     console.log(slides)
// // }

// // let prev = document.querySelector('.prev')
// // let next = document.querySelector('.next')

// let reportWindowSize = function() {
//     if (window.innerWidth < 885) {

//         wrapper.classList.add('swiper-wrapper')
//         container.classList.add('swiper-container')
//         slides.forEach(element => element.classList.add('swiper-slide'));
//         // prev.classList.add('swiper-button-prev')
//         // next.classList.add('swiper-button-next')

//         console.log('mobile')
//     } else {
//         wrapper.classList.remove('swiper-wrapper')
//         container.classList.remove('swiper-container')
//         slides.forEach(element => element.classList.remove('swiper-slide'));
//         // prev.classList.remove('swiper-button-prev')
//         // next.classList.remove('swiper-button-next')

//         console.log('desktop')
//     }
// }

// window.onresize = reportWindowSize;
// window.onload = reportWindowSize;