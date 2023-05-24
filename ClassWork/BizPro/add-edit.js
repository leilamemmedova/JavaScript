let id = new URLSearchParams(window.location.search).get("id");

let profName = document.querySelector("#name");
let price = document.querySelector("#price");
let description = document.querySelector("#description");
let form = document.querySelector("form");
const inputImage=document.querySelector('#inputImage')

let BASE_URL = "http://localhost:8080/developments";

if (id) {
  async function editFunc(id) {
    let res = await axios(`${BASE_URL}/${id}`);
    let data = await res.data;
    profName.value = data.title;
    description.value = data.text;
    price.value = data.price;
  }
  editFunc(id);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
 
  if (id) {
    editUser()
    window.location.href = "index.html";
  } else {
   postUser()
    window.location.href = "index.html";

  }
});



async function editUser() {
  let obj = {
    title: profName.value,
    text: description.value,
    price: price.value,
  };
  await axios.patch(`${BASE_URL}/${id}`, obj);
}


async function postUser(){
    let obj = {
      title: profName.value,
      text: description.value,
      price: price.value,
      image: inputImage.value.split`\\`[2],
    };
   await axios.post(BASE_URL, obj);
}