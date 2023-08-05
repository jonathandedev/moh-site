"use strict";

/**
 * Used to setup the click events for the form.
 */
function setupForm() {
  const btn = document.getElementById("form-button");
  btn.addEventListener("click", submitForm);

  const inputs = document.querySelectorAll(".form__input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("oninput", removeInvalid);
  }
  const textArea = document.getElementById("message");
  textArea.addEventListener("oninput", removeInvalid);

  function removeInvalid() {
    this.classList.remove("invalid");
  }
}

/**
   * Used to submit the form.
   */
function submitForm() {
  const name = document.getElementById("name").value;
  const organisation = document.getElementById("group").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const data = {
    name: name,
    organisation: organisation,
    email: email,
    message: message
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    mode: "cors"
  };

  fetch("https://contact.messagesofhope.co.uk/workwithus", options)
    .then(res => {
      if (res.ok) {
        clearForm();
        showModal(true);
        return;
      } else {
        if (res.status === 400) {
          showInvalidFields(res.body.json());
          return;
        } else {
          clearForm();
          showModal(false);
          return;
        }
      }
    }).catch(error => {console.log(error);});

  /**
   * Used to clear the form.
   */
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("group").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  /**
   * Used to show the modal.
   * @param {boolean} success - Whether the form was successfully submitted.
   */
  function showModal(success) {
    const backdrop = document.getElementById("modal-backdrop");
    const modal = document.getElementById("modal");
    const title = document.querySelector("#modal h1");
    const text = document.querySelector("#modal p");
    const closeBtn = document.querySelector("#modal button");

    backdrop.style.display = "block";
    modal.style.display = "block";

    if (!success) {
      title.innerHTML = "OOPS. Something went wrong...";
      text.innerHTML = "Please try again later, or email us directly at contact@messagesofhope.co.uk.";
    } else {
      title.innerHTML = "Thank you for your message!";
      text.innerHTML = "We will get back to you as soon as possible.";
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

  /**
   * Used to show the invalid fields.
   * @param {object} data - The data from the server.
   */
  function showInvalidFields(data) {
    if (data.name) {
      document.getElementById("name").classList.add("invalid");
    }

    if (data.email) {
      document.getElementById("email").classList.add("invalid");
    }

    if (data.message) {
      document.getElementById("message").classList.add("invalid");
    }
  }
}

document.body.onload = setupForm();
