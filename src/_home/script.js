"use strict";

/**
 * Used to setup the click events for the latest news button.
 */
function latestNewsSetup() {
  const artProjectButton = document.getElementById("latest-news__art-project");
  const danceFundraiserButton = document.getElementById("latest-news__dance-fundraiser");
  const artProject = document.getElementById("moh-2023-popup");
  const danceFundraiser = document.getElementById("dance-fundraiser-popup");
  const modal = document.getElementById("modal");

  modal.addEventListener("click", function() {
    modal.classList.remove("open");
    artProject.classList.remove("open");
    danceFundraiser.classList.remove("open");
  });

  artProjectButton.addEventListener("click", function() {
    modal.classList.add("open");
    artProject.classList.add("open");
  });

  danceFundraiserButton.addEventListener("click", function() {
    modal.classList.add("open");
    danceFundraiser.classList.add("open");
  });

  const artProjectCloseButton = document.getElementById("moh-2023-popup__close-button");
  const danceFundraiserCloseButton = document.getElementById("dance-fundraiser-popup__close-button");

  artProjectCloseButton.addEventListener("click", function() {
    modal.classList.remove("open");
    artProject.classList.remove("open");
  });

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
