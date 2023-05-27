let cards = document.querySelector(".cards");
let searchBtn = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let loadMore = document.querySelector(".load-more");
let menuBtn= document.querySelector(".menuBtn")
let modalRemove= document.querySelector("#modal-remove")
let burgerModal= document.querySelector(".burger-modal")

let BASE_URL = "http://localhost:8080/exercises";
let filtered = [];
let allData = [];
let defaultArr = [];
let num = 3;

async function getAllData() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  allData = data;
  copyArr = data;
  filtered =
    filtered.length || searchBtn.value
      ? filtered.slice(0, num)
      : data.slice(0, num);
  cards.innerHTML = "";
  filtered.forEach((item) => {
    cards.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="care-card">
                <img src="./assets/images/${item.image}" alt="" />
                <h4 class="text-center">${item.name}</h4>
                <p class="text-center">
                  ${item.description}
                </p>
                <p class="text-center">${item.price} $</p>
                <div class="buttons">
                  <a class="btn btn-danger" onclick=deleteFunc(${item.id})>DELETE</a>
                  <a class="btn btn-warning" href="details.html?id=${item.id}">MORE DETAILS</a>
                  <a class="btn btn-primary" onclick=favFunc(${item.id})>ADD BASKETS</a>
                  <a class="btn btn-success" href="add-edit.html?id=${item.id}">EDIT</a>
                </div>
              </div>
            </div>
    `;
  });
}
getAllData();

function deleteFunc(id) {
  axios.delete(`${BASE_URL}/${id}`);
  filtered.filter((item) => item.id != id);
  getAllData();
}

loadMore.addEventListener("click", async function () {
  num = num + 3;
  filtered = allData;
  getAllData();
});

searchBtn.addEventListener("input", async function (e) {
  filtered = allData.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getAllData();
});
console.log(filtered);

let bool = true;
sortBtn.addEventListener("click", async function () {
  if (bool) {
    sortBtn.innerHTML = "Accending";
    filtered.sort((a, b) => a.price - b.price);
    bool = false;
    getAllData();
  } else {
    sortBtn.innerHTML = "Deccenging";
    filtered.sort((a, b) => b.price - a.price);
    bool = true;
    getAllData();
  }
});

let favData = JSON.parse(localStorage.getItem("favData")) || [];

async function favFunc(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = res.data;
  let available = favData.find((item) => item.id == id);
  if (!available) {
    favData.push(data);
    localStorage.setItem("favData", JSON.stringify(favData));
  } else {
    alert("hehehe");
  }
}

menuBtn.addEventListener("click", function(){
  burgerModal.style.display="block"
})
modalRemove.addEventListener("click", function(){
  burgerModal.style.display="none"
})
