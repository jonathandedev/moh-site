
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

    backdrop.style.display = "block";
    modal.style.display = "block";

    if (!success) {
      title.innerHTML = "OOPS. Something went wrong...";
      text.innerHTML = "Please try again later, or send us one directly using social media.";
    } else {
      title.innerHTML = "Thank you for your message!";
      text.innerHTML = "We really appreciate you taking the time to write a message.";
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

document.body.onload = setupForm();