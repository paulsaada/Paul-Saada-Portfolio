var titles = document.querySelectorAll(".title");

titles.addEventListener("scroll", function(){
	titles.classList.add("animated");
	titles.classList.add("slower");
	titles.classList.add("fadeIn");
});

var portfolioLeft = document.querySelectorAll(".portfolio-left");

portfolioLeft.addEventListener("scroll", function(){
	portfolioLeft.classList.add("animated", "slower", "fadeInRight");
});

var portfolioRight = document.querySelectorAll(".portfolio-right");

portfolioRight.addEventListener("scroll", function(){
	portfolioRight.classList.add("animated", "slower", "fadeInLeft");
});

var contactForm = document.querySelectorAll(".contact-form");

contactForm.addEventListener("scroll", function(){
	contactForm.classList.add("animated", "slower", "fadeInRight");
});