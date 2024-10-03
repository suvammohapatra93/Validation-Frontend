let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  // Check if the name has at least two words (first name and last name)
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  // Check for at least two words (space between first and last name)
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "Please enter both first and last name";
    return false;
  }

  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }

  // Ensure only digits are allowed and check if it has exactly 10 digits
  if (!phone.match(/^\d{10}$/)) {
    phoneError.innerHTML =
      "Phone number must be 10 digits and only contain numbers";
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function restrictPhoneInput(e) {
  // Allow only digits (0-9), backspace, and delete
  let key = e.keyCode || e.which;
  if (
    !(
      (key >= 48 && key <= 57) || // Digits 0-9
      key == 8 || // Backspace
      key == 46 // Delete
    )
  ) {
    e.preventDefault(); // Prevent invalid characters
  }
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;

  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix errors to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  submitError.innerHTML = "Form submitted successfully!";
  return true;
}

// Add event listener to restrict invalid characters in the phone field
document.getElementById("contact-phone").addEventListener("keypress", restrictPhoneInput);
