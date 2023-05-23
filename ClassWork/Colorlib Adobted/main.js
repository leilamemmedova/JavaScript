let cards = document.querySelector(".cards");
let searchBtn = document.querySelector(".searchBtn");
let sortBtn = document.querySelector(".sortBtn");

let BASE_URL = "http://localhost:8080/people";
let filtered = [];
let allData = [];


async function getAllData() {
  let res = await axios(`${BASE_URL}`);
  let data = res.data;
  allData = data;
  filtered = filtered.length || searchBtn.value ? filtered : data;
  cards.innerHTML = "";
  filtered.forEach((item) => {
    cards.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
              <div class="carde" style="width: 18rem">
                <img src="${item.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${item.name},   ${item.age} yrs old baby</h5>
                  <a href="add-edit.html?id=${item.id}" class="btn btn-success">Edit</a>
                  <button class="btn btn-danger delete" onclick=deleteFunc(${item.id})>Delete</button>
                  <a class="btn btn-primary" onclick=favFunc(${item.id})>Add Fav</a>
                </div>
              </div>
            </div>
        `;
  });
}
getAllData();

async function deleteFunc(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered = allData.filter((item) => item.id != id);
  getAllData();
}

let favData = JSON.parse(localStorage.getItem("favData")) || [];

async function favFunc(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  let available = favData.find((item) => item.id == id);
  if (!available) {
    favData.push(data);
    localStorage.setItem("favData", JSON.stringify(favData));
  } else {
    alert("hehehe");
  }
}

searchBtn.addEventListener("input", async function (e) {
  let res = await axios(BASE_URL);
  let data = await res.data;

  filtered = data.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getAllData();
});

let bool = true;
sortBtn.addEventListener("click", async function () {
  if (bool) {
    filtered.sort((a, b) => a.age - b.age);
    bool = false;
    getAllData();
  } else {
    filtered.sort((a, b) => b.age - a.age);
    bool = true;
    getAllData();
  }
});
