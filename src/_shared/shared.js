"use strict";

/**
 * Used to setup the click and hover events for the header.
 */
function headerSetup() {
  mobileNavSetup();
  desktopNavSetup();
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
 * Used to setup the hover events for the desktop nav.
 */
function desktopNavSetup() {
  const dot = document.getElementById("main-nav__dot");
  const navButton1 = document.querySelector("#main-nav__inner .main-nav__item:nth-child(1)");
  const navButton2 = document.querySelector("#main-nav__inner .main-nav__item:nth-child(2)");
  const navButton3 = document.querySelector("#main-nav__inner .main-nav__item:nth-child(3)");
  const navButton4 = document.querySelector("#main-nav__inner .main-nav__item:last-child");

  navButton1.addEventListener("mouseover", function() {addDot("2.7")});
  navButton1.addEventListener("mouseout", removeDot);
  navButton2.addEventListener("mouseover", function() {addDot("10.5")});
  navButton2.addEventListener("mouseout", removeDot);
  navButton3.addEventListener("mouseover", function() {addDot("18.5")});
  navButton3.addEventListener("mouseout", removeDot);
  navButton4.addEventListener("mouseover", function() {addDot("24.2")});
  navButton4.addEventListener("mouseout", removeDot);

  /**
   * Used to add the dot when the mouse enters the nav.
   */
  function addDot(val) {
    dot.style.webkitTransform = "translateX(" + val + "rem)";
    dot.style.MozTransform = "translateX(" + val + "rem)";
    dot.style.transform = "translateX(" + val + "rem)";
    dot.style.webkitTransition = "all 0.3s ease-in-out";
    dot.style.MozTransition = "all 0.3s ease-in-out";
    dot.style.transition = "all 0.3s ease-in-out";
    dot.style.opacity = "1";
  }

  /**
   * Used to remove the dot when the mouse leaves the nav.
   */
  function removeDot() {
    dot.style.webkitTransform = "translateX(0)";
    dot.style.MozTransform = "translateX(0)";
    dot.style.transform = "translateX(0)";
    dot.style.webkitTransition = "all 0.3s ease-in-out";
    dot.style.MozTransition = "all 0.3s ease-in-out";
    dot.style.transition = "all 0.3s ease-in-out";
    dot.style.opacity = "0";
  }
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
    window.open("mailto:mailto:contact@messagesofhope.co.uk");
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