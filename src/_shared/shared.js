"use strict";

/**
 * Used to setup the click and hover events for the header.
 */
function headerSetup() {
  mobileNavSetup();
}

/**
 * Used to setup the click events for the mobile navigation.
 */
function mobileNavSetup() {
  const hamburger = document.getElementById("main-header__hamburger");
  const mobileNav = document.getElementById("main-header__mobile-nav");
  const mobileAboutNav = document.getElementById("mobile-nav__about");
  const mobileNavButtons = document.querySelectorAll(".mobile-nav a");
  
  hamburger.addEventListener("click", toggleNav);
  for (let i = 0; i < mobileNavButtons.length; i++) {
    mobileNavButtons[i].addEventListener("click", toggleNav);
  }

  /**
   * Used to close the mobile navigation.
   */
  function toggleNav() {
    mobileAboutNav.classList.remove("open");
    mobileNav.classList.toggle("open");
    hamburger.classList.toggle("open");
  }

  const aboutButton = document.getElementById("mobile-nav__item--about");
  const aboutButtonClone = aboutButton.cloneNode(true);
  aboutButton.parentNode.replaceChild(aboutButtonClone, aboutButton);
  aboutButtonClone.addEventListener("click", function() {
    mobileAboutNav.classList.add("open");
  });

  const backButton = document.getElementById("mobile-nav__item--back");
  const backButtonClone = backButton.cloneNode(true);
  backButton.parentNode.replaceChild(backButtonClone, backButton);
  backButtonClone.addEventListener("click", function() {
    mobileAboutNav.classList.remove("open");
  });
}

/**
 * Used to setup the click events for the footer.
 */
function footerSetup() {
  const email = document.getElementById("main-footer__email-button");

  email.addEventListener("click", openEmail);

  /**
   * Used to open the email window.
   */
  function openEmail() {
    window.open("mailto:contact@messagesofhope.co.uk");
  }
}

/**
 * Used to add javascript functionality when the page is loaded.
 */
function generatePage() {
  headerSetup();
  footerSetup();
}

document.body.onload = generatePage();