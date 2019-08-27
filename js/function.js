//Your functions here

var slideIndex = 1;

// Right/Left controls
function sliderRight() {
	showSlides((slideIndex += 1));
}
function sliderLeft() {
	showSlides((slideIndex -= 1));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function autoSlide() {
	slideIndex += 1;
	showSlides(slideIndex);
	setTimeout(autoSlide, 3000);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('showSlide');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}
