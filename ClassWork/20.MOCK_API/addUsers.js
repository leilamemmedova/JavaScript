let id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector(".add-form");
let firstName = document.querySelector(".firstname");
let email = document.querySelector(".email");

let BASE_URL = `http://localhost:8000/users`;
axios(BASE_URL).then((res) => console.log(res.data));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    username: firstName.value,
    email: email.value,
  };
  axios.post(BASE_URL, obj).then(() => {
    window.location = "index.html";
  });

});
