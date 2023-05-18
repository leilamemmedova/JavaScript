let id = new URLSearchParams(window.location.search).get("id");
console.log('id', id);
let form = document.querySelector(".edit-form");
let firstName = document.querySelector(".firstname");
let email = document.querySelector(".email");
let editBtn = document.querySelector(".edit")

let BASE_URL = `http://localhost:8000/users`;


async function getUserById() {
  const res = await axios(`${BASE_URL}/${id}`)
  const data = await res.data
  firstName.value = data.username,
    email.value = data.email
}
getUserById()

async function editUser() {
  const obj = {
    username: firstName.value,
    email: email.value
  }
  await axios.patch(`${BASE_URL}/${id}`, obj)
}


form.addEventListener("submit", async (e) => {
  e.preventDefault()
  editUser()
  window.location = 'index.html'
})


