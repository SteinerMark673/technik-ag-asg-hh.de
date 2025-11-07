let count = 0;

const simpleSlides = function () {
    const slides = document.querySelectorAll(".slides");
    for (const item of slides) {
    	item.classList.remove ("animate-left")
    }
    count++;
    if (count > slides.length) { count = 1; }
    slides[count-1].classList.add("animate-left");
    setTimeout(simpleSlides, 3600);
}

simpleSlides();
