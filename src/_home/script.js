"use strict";

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
  latestNewsSetup();
}

document.body.onload = generatePage();
