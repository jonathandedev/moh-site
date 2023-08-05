"use strict";

function bannerSetup() {
  const banners = document.querySelectorAll("#banner article");
  const buttons = document.querySelectorAll("#banner-control btn");
  let currentBanner = 0;

  let loop = setInterval(showNextBanner, 5000);

  function showNextBanner() {
    banners[currentBanner].classList.add("hidden");
    banners[currentBanner].classList.remove("active");
    buttons[currentBanner].classList.remove("highlight");

    currentBanner = nextBanner();

    banners[currentBanner].classList.add("animated");
    banners[currentBanner].classList.add("active");
    buttons[currentBanner].classList.add("highlight");

    setTimeout(function() {
      banners[previousBanner()].classList.remove("animated");
      banners[previousBanner()].classList.remove("hidden");
      banners[previousBanner()].classList.remove("active");
    }, 500);
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      const index = Array.prototype.indexOf.call(buttons, this);
      if (index === currentBanner) {
        return;
      }

      clearInterval(loop);
      banners.forEach(function(banner) {
        banner.classList.remove("hidden");
        if (!banner.classList.contains("active")) {
          banner.classList.remove("animated");
        }
      });
      banners[currentBanner].classList.add("animated");
      banners[currentBanner].classList.add("hidden");
      buttons[currentBanner].classList.remove("highlight");

      banners[index].classList.add("animated");
      banners[index].classList.add("active");
      buttons[index].classList.add("highlight");

      currentBanner = index;
      
      setTimeout(function() {
        banners[previousBanner()].classList.remove("animated");
        banners[previousBanner()].classList.remove("hidden");
        banners[previousBanner()].classList.remove("active");
        banners[nextBanner()].classList.remove("animated");
        banners[nextBanner()].classList.remove("hidden");
        banners[nextBanner()].classList.remove("active");
      }, 500);

      loop = setInterval(showNextBanner, 5000);
    });
  }

  function nextBanner() {
    if (currentBanner === banners.length - 1) {
      return 0;
    }
    return currentBanner + 1;
  }

  function previousBanner() {
    if (currentBanner === 0) {
      return banners.length - 1;
    }
    return currentBanner - 1;
  }
}


/**
 * Used to setup the click events for the latest news button.
 */
function newsSetup() {
  const danceFundraiserButton = document.getElementById("news__dance-fundraiser");
  const danceFundraiser = document.getElementById("dance-fundraiser-popup");
  const modal = document.getElementById("modal");

  modal.addEventListener("click", function() {
    modal.classList.remove("open");
    danceFundraiser.classList.remove("open");
  });

  danceFundraiserButton.addEventListener("click", function() {
    modal.classList.add("open");
    danceFundraiser.classList.add("open");
  });

  const danceFundraiserCloseButton = document.getElementById("dance-fundraiser-popup__close-button");

  danceFundraiserCloseButton.addEventListener("click", function() {
    modal.classList.remove("open");
    danceFundraiser.classList.remove("open");
  });
}

/**
 * Used to add javascript functionality when the page is loaded.
 */
function generatePage() {
  bannerSetup();
  newsSetup();
}

document.body.onload = generatePage();
