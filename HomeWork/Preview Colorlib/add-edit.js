let id = new URLSearchParams(window.location.search).get("id");

let BASE_URL = "http://localhost:8080/exercises";

let sportName = document.querySelector("#name");
let price = document.querySelector("#price");
let description = document.querySelector("#description");
let photo = document.querySelector("#photo");
let form = document.querySelector("form");

if (id) {
  async function editFunc(id) {
    let res = await axios(`${BASE_URL}/${id}`);
    let data = res.data;
    sportName.value = data.name;
    description.value = data.description;
    price.value = data.price;
  }
  editFunc(id);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    name: sportName.value,
    description: description.value,
    price: price.value,
    image: photo.value.split("\\")[2],
  };
  if (id) {
    await axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    await axios.post(BASE_URL, obj);
  }
  window.location = "index.html";
});
