const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Surgery.", "Radiology.", "Pathology and Laboratory.", "Medicine.","Evaluation and Management."];
const typingDelay = 150;
const erasingDelay = 70;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
		    animateIn: 'zoomIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 300,
			autoplay: 7000,
			navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});  		
	}