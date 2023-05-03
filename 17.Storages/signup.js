let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let myForm = document.querySelector(".myform");

const users = JSON.parse(localStorage.getItem("users")) || [];

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    username: userName.velue,
    email: email.value,
    password: password.value,
    check: checkbox.checked,
  };

  if (user.username && user.email) {
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
  }
});
