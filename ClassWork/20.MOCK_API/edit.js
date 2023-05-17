let id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector(".edit-form");
let userName = document.querySelector(".username");
let email = document.querySelector(".email");
let editBtn= document.querySelector(".edit")

let BASE_URL = `http://localhost:8080/users`;

async function getUserById(){
  const res= await axios(BASE_URL)
  const data= await res.data
    userName.value=data.username
    email.value=data.email
}
getUserById()

async function editUser(){
  let obj = {
    username: userName.value,
    email: email.value
  };
 await axios.patch(`${BASE_URL}/${id}`,obj)
}

form.addEventListener("submit",async function(e){
  e.preventDefault()
  editUser()
  window.location="index.html"
})
;


