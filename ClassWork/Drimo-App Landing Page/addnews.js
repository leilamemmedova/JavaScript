let id = new URLSearchParams(window.location.search).get("id");

let BASE_URL = "http://localhost:8080/professional";

let form = document.querySelector("form");
let professionName = document.querySelector("#profname");
let description = document.querySelector("#description");
let price = document.querySelector("#price");
let photo = document.querySelector("#photo");

if (id) {
  async function editFunc(id) {
    let res = await axios(`${BASE_URL}/${id}`);
    let data = res.data;
    professionName.value = data.name;
    description.value = data.text;
    price.value = data.price;
  }
  editFunc(id);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.log("hi");
  let obj = {
    name: professionName.value,
    text: description.value,
    price: price.value,
  };
  
  if (id) {
    await axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    await axios.post(BASE_URL, obj);
  }
  window.location = "index.html";
});
