import { requiredEmail, requiredPhone } from "./validation";

let phoneField = document.querySelector("#phone"),
  emailField = document.querySelector("#email"),
  emailMessage = document.querySelector("#email-message");
phoneMessage = document.querySelector("#phone-message");

phoneField.addEventListener("input", (e) => {
  let res = requiredPhone(e.target.value);
  if (res) {
    phoneMessage.textContent = "Ok";
  } else {
    phoneMessage.textContent = "*";
  }
});

emailField.addEventListener("input", (e) => {
  let res = requiredEmail(e.target.value);
  if (res) {
    emailMessage.textContent = "Ok";
  } else {
    emailMessage.textContent = "*";
  }
});
