// <!-- custom js code here -->

// <!-- getting the form and form inputs -->

const signupFormInput = document.querySelector("#signupForm");
const usernameInput = document.querySelector("#username");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// wors for both internationl and domestic
const phonePattern = /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/;

// preventing default refresh by the browser when submiting
signupFormInput.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form was submitted!");

  //   validating user name
  const currentName = usernameInput.value.trim();
  const userNameError = usernameInput.nextElementSibling;
  if (currentName === "") {
    usernameInput.classList.add("is-invalid");
    userNameError.textContent = "Username cannot be empty";
  } else {
    usernameInput.classList.remove("is-invalid");
    usernameInput.classList.add("is-valid");
    userNameError.textContent = "";
  }

  // validation phone number
  const currentPhone = phoneInput.value.trim();
  const phoneError = phoneInput.nextElementSibling;
  if (currentPhone === "") {
    phoneInput.classList.add("is-invalid");
    phoneError.textContent = "Phone number cannot be empty";
  } else if (!phonePattern.test(currentPhone)) {
    phoneInput.classList.add("is-invalid");
    phoneError.textContent = "Please enter a valid phone number";
  } else {
    phoneInput.classList.remove("is-invalid");
    phoneInput.classList.add("is-valid");
    phoneError.textContent = "";
  }

  //   validating email
  const currentEmail = emailInput.value.trim();
  const emailError = emailInput.nextElementSibling;
  if (currentEmail === "") {
    emailInput.classList.add("is-invalid");
    emailError.textContent = "Email field cannot be empty";
  } else if (!emailPattern.test(currentEmail)) {
    emailInput.classList.add("is-invalid");
    emailError.textContent = "Please enter a valid email";
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    emailError.textContent = "";
  }

  // valildatiing password
  const currentPassword = passwordInput.value.trim();
  const passwordError =
    passwordInput.parentElement.querySelector(".invalid-feedback");
  const passwordLength = currentPassword.length;
  if (currentPassword === "") {
    passwordInput.classList.add("is-invalid");
    passwordError.textContent = "password field cannot be empty";
  } else if (passwordLength < 8) {
    passwordInput.classList.add("is-invalid");
    passwordError.textContent = "Password must be at least 8 characters";
  } else {
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.add("is-valid");
    passwordError.textContent = "";
  }

  //validating confirm password
  const currentConfirmPassword = confirmPasswordInput.value.trim();
  const confirmPasswordError = confirmPasswordInput.nextElementSibling;

  if (currentPassword !== currentConfirmPassword) {
    confirmPasswordInput.classList.add("is-invalid");
    confirmPasswordError.textContent = "Passwords do not match";
  } else {
    confirmPasswordInput.classList.remove("is-invalid");
    confirmPasswordInput.classList.add("is-valid");
    confirmPasswordError.textContent = "";
  }
});
