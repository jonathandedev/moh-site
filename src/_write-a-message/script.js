
/**
 * Setup the form to submit the message.
 */
function setupForm() {
  const btn = document.getElementById('submit-button');
  btn.addEventListener('click', submitForm);

  const message = document.getElementById('message');
  message.addEventListener('focus', () => {
    message.classList.remove('invalid');
  });

  function submitForm() {
    const mdata = message.value;

    if (mdata.length > 5) {
      const data = {
        message: mdata
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      };

      fetch("https://contact.messagesofhope.co.uk/writeamessage", options)
        .then(res => {
          if (res.ok) {
            clearForm();
            showModal(true);
            return;
          } else {
            clearForm();
            showModal(false);
            return;
          }})
        .catch(error => {console.log(error);});
    } else {
      message.classList.add('invalid');
    }
  }

  function clearForm() {
    message.value = "";
  }

  function showModal(success) {
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById('modal');
    const modalTitle = document.querySelector('#modal h1');
    const modalText = document.querySelector('#modal p');
    const closeBtn = document.querySelector('#modal button');

    backdrop.style.display = "block";
    modal.style.display = "block";

    if (!success) {
      modalTitle.innerHTML = "OOPS. Something went wrong...";
      modalText.innerHTML = "Please try again later, or send us one directly using social media.";
    } else {
      modalTitle.innerHTML = "Thank you for your message!";
      modalText.innerHTML = "We really appreciate you taking the time to write a message.";
    }

    closeBtn.addEventListener("click", () => {
      backdrop.style.display = "none";
      modal.style.display = "none";
    });

    backdrop.addEventListener("click", () => {
      backdrop.style.display = "none";
      modal.style.display = "none";
    });
  }
}

/**
 * Setup the image carousel for mobile devices.
 */
function setupMobileCarousel() {
  const images = document.querySelectorAll("#write-a-message .mobile-element picture");
  let currentImage = 0;

  setInterval(showNextImage, 4000);

  function showNextImage() {
    images[nextImage(currentImage)].classList.add("active");
    images[nextImage(nextImage(currentImage))].classList.remove("active");
    images[nextImage(currentImage)].style.zIndex = 2;
    setTimeout(prepareImage, 2000);
  }

  function prepareImage() {
    images[currentImage].style.zIndex = -1;
    images[nextImage(currentImage)].style.zIndex = 1;
    images[nextImage(nextImage(currentImage))].style.zIndex = 3;
    currentImage = nextImage(currentImage);
  }

  function nextImage(current) {
    if (current === images.length - 1) {
      return 0;
    } 
    return current + 1;
  }
}

function setupDesktopCarousel() {

  let images1 = {
    list: document.querySelectorAll("#container-1 picture"),
    current: 0,
  };
  let images2 = {
    list: document.querySelectorAll("#container-2 picture"),
    current: 0,
  };
  let images3 = {
    list: document.querySelectorAll("#container-3 picture"),
    current: 0,
  };

  setInterval(showNextImage, 7000, images2);
  setTimeout(() => {setInterval(showNextImage, 7000, images1)}, 950);
  setTimeout(() => {setInterval(showNextImage, 7000, images3)}, 2200);

  function showNextImage(images) {
    images.list[nextImage(images.current, images.list)].classList.add("active");
    images.list[nextImage(nextImage(images.current, images.list), images.list)].classList.remove("active");
    images.list[nextImage(images.current, images.list)].style.zIndex = 2;
    setTimeout(prepareImage, 2000, images);
  }

  function prepareImage(images) {
    images.list[images.current].style.zIndex = -1;
    images.list[nextImage(images.current, images.list)].style.zIndex = 1;
    images.list[nextImage(nextImage(images.current, images.list), images.list)].style.zIndex = 3;
    images.current = nextImage(images.current, images.list);
  }

  function nextImage(current, list) {
    if (current === list.length - 1) {
      return 0;
    }
    return current + 1;
  }
}

function pageSetup() {
  setupForm();
  setupMobileCarousel();
  setupDesktopCarousel();
}

document.body.onload = pageSetup;