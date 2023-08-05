
function setupHero() {
  const hero = document.querySelectorAll('.collaborative-art-project__hero picture');
  let current = 0;

  setInterval(showNext, 5000);

  function showNext() {
    hero[current].classList.add("hidden");
    
    current = nextImage();

    hero[current].classList.add("animated");
    hero[current].classList.add("active");

    hero[nextImage()].classList.remove("animated");
    hero[nextImage()].classList.remove("active");
    hero[nextImage()].classList.remove("hidden");
  }

  function nextImage() {
    if (current === hero.length - 1) {
      return 0;
    }
    return current + 1;
  }
}

setupHero();
