document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  slideshow();

  function slideshow() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {index = 1}
    slides[index-1].style.display = "block";
    setTimeout(slideshow, 4000);
  }
});