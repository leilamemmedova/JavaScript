let myForm = document.querySelector(".myform");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let submit = document.querySelector(".submit");
let addBtn = document.querySelector("#addUser");
let boxess = document.querySelector(".boxes");

const users = JSON.parse(localStorage.getItem("users")) || [];

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userObj = {
    id: Date.now(),
    username: userName.value,
    email: email.value,
    password: password.value,
    checkbox: checkbox.checked,
  };
  if (userName.value && email.value && password.value && checkbox.checked) {
    users.push(userObj);
    localStorage.setItem("users", JSON.stringify(users));
  }
});

submit.addEventListener("click", function () {
  window.location = "index2.html";
});

//////////index2

// let boxes = JSON.parse(localStorage.getItem("box")) || [];

// function boxesList() {
//   let box = document.createElement("div");
//   boxes.append("box");
//   users.forEach(
//     (item) =>
//       (box.innerHTML = `
//   <div class="box">
//   <h1 class="text"> User</h1>
//   <span>name: ${item.username}</span>
//   <span>email:${item.email}</span>
//   <button class="btn btn-danger deletebtn">delete</button>
//   </div>
//   `)
//   );
// }

// addBtn.addEventListener("click", () => {
//   console.log('ss');
// });

function checkInputValue() {
  if (userName.value && email.value && password.value && checkbox.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.setAttribute("disabled", "");
  }
}

userName.addEventListener("input", () => {
  checkInputValue();
});
password.addEventListener("input", () => {
  checkInputValue();
});
email.addEventListener("input", () => {
  checkInputValue();
});
checkbox.addEventListener("input", () => {
  checkInputValue();
});
