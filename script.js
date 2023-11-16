let userMail = document.getElementById("email");
let userPass = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");
let errorMsg = document.querySelector(".error-email");
let errorPass = document.querySelector(".error-password");

function checkEmail(email, error) {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!emailRegex.test(email.value.trim())) {
  email.style.border = "3px red solid";
  error.innerHTML = "Please enter a valid email address.";
  error.classList.add("error");
  return false;
 } else {
  email.classList.remove("error");
  email.style.outline = "";
  error.innerHTML = "";
  return true;
 }
}
function checkPassword(password, error) {
 if (password.value.length < 8) {
  password.style.border = "3px red solid";
  password.classList.add("error-second");
  error.classList.add("error");
  error.innerHTML = "Password must be at least 8 characters.";
  return false;
 } else {
  password.classList.remove("error-second");
  password.style.outline = "";
  error.innerHTML = "";
  return true;
 }
}

submitBtn.addEventListener("click", (event) => {
 let isEmailValid = checkEmail(userMail, errorMsg);
 let isPasswordValid = checkPassword(userPass, errorPass);

 if (!(isEmailValid && isPasswordValid)) {
  event.preventDefault();
 }
});
