import Swiper, {Lazy, Pagination, Navigation, EffectFade} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation, EffectFade]);

let bannerSlider;
let loop = false;

const initSlider = (num = 0, loop) => {
	bannerSlider = new Swiper('.banner-slider', {
		loop: loop,
		slidesPerView: 1,
		speed: 1000,
		preloadImages: false,
		lazy: true,
		initialSlide: num,
		effect: 'fade',
		fadeEffect: {
			crossFade: true 
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
			clickable: true,
		},
		breakpoints: {
			320: {
				pagination: false
			},
			580: {
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
					clickable: true,
				},
			},
		}
	})
}

const slides = document.querySelectorAll('.banner-slide');

if (slides.length > 1) loop = true;

initSlider(0, loop);


const reviewsSlider = new Swiper('.reviews-slider', {
	slidesPerView: 2,
	speed: 1000,
	spaceBetween: 50,
	autoHeight: true,
	pagination: {
		el: '.slider-pagination',
		type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
	}
})