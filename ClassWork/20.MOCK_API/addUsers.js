let id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector(".add-form");
let userName = document.querySelector(".username");
let email = document.querySelector(".email");

let BASE_URL = `http://localhost:8080/users`;
axios(BASE_URL).then((res) => console.log(res.data));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    username: userName.value,
    email: email.value,
  };
  axios.post(BASE_URL, obj).then(() => {
    window.location = "index.html";
  });
});
