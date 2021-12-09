
const prev = document.querySelector('.slider-hero__prev'),
	  next = document.querySelector('.slider-hero__next'),
	  slides = document.querySelectorAll('.slider-hero__slide');
let counter = 0;
let slidesLength = slides.length;

slides[0].classList.add('slider-hero__slide--active');

if (counter == 0) {
}


const move = function() {

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('slider-hero__slide--active');
	}

	slides[counter].classList.add('slider-hero__slide--active');

	console.log(counter);
}

next.addEventListener('click', () => {
	if (counter + 1 == slides.length) {
		next.classList.add("slider-hero__next--none");
	} else {
		next.classList.remove("slider-hero__next--none");
		counter++;
	}
	move();
});

prev.addEventListener('click', () => {
	if (counter === 0) {
		prev.classList.add("slider-hero__next--none");
	} else {
		prev.classList.remove("slider-hero__next--none");
		counter--;
	}

	move();
});

