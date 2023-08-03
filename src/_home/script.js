"use strict";

function bannerSetup() {
  const banner1 = document.getElementById("banner-1");
  const banner2 = document.getElementById("banner-2");
  const banner3 = document.getElementById("banner-3");
  let currentBanner = banner1;

  setInterval(showNextBanner, 5000);

  function showNextBanner() {
    nextBanner(currentBanner).classList.add("active");
    nextBanner(nextBanner(currentBanner)).classList.remove("active");
    currentBanner.style.zIndex = 3;
    nextBanner(currentBanner).style.zIndex = 4;
    setTimeout(prepareBanner, 2000);
  }

  function prepareBanner() {
    nextBanner(nextBanner(currentBanner)).style.zIndex = 5;
    currentBanner = nextBanner(currentBanner);
  }

  function nextBanner(banner) {
    if (banner == banner1) {
      return banner2;
    } else if (banner == banner2) {
      return banner3;
    } else {
      return banner1;
    }
  }
}


/**
 * Used to setup the click events for the latest news button.
 */
function latestNewsSetup() {
  const danceFundraiserButton = document.getElementById("latest-news__dance-fundraiser");
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
  latestNewsSetup();
}

document.body.onload = generatePage();
