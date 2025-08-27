// SELECTING ELEMENTS
const btnDiv = document.querySelector(".btn");
const inputDiv = document.getElementById("input");
const copyIconDiv = document.querySelector(".fa-copy");
const alertContainerDiv = document.querySelector(".alert-container");

// ADDING EVENT LISTNER TO COPY ICON
copyIconDiv.addEventListener("click", () => {
  // CALLING COPY FUNCTION
  copyPassword();
  if (inputDiv.value) {
    alertContainerDiv.classList.remove("active");
    setTimeout(() => {
      alertContainerDiv.classList.add("active");
    }, 2000);
  }
});
// DECLARE CREATE PASSWORD FUNCTION
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputDiv.value = password;
  alertContainerDiv.innerText = password + " copied!";
}
// DECLARING COPY PASSWORD FUNCTION
function copyPassword() {
  inputDiv.select();
  inputDiv.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputDiv.value);
}
// ADDING EVENT LISTNER TO BTN
btnDiv.addEventListener("click", () => {
  // CALLING CREATE PASSWORD FUNCTION
  createPassword();
});