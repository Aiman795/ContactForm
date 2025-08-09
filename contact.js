const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  showError("name-error", "");
  showError("email-error", "");
  showError("subject-error", "");
  showError("message-error", "");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  let valid = true;

  if (nameInput.value.trim() === "") {
    showError("name-error", "Please enter your full name");
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    showError("email-error", "Please enter your email address");
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError("email-error", "Enter a valid email address");
    valid = false;
  }

  if (subjectInput.value.trim() === "") {
    showError("subject-error", "Please enter a subject");
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    showError("message-error", "Please enter your message");
    valid = false;
  }

  if (valid) {
    alert("Your message has been sent successfully!");
    form.reset();
  }
});
