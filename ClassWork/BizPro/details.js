let profName = document.querySelector("#name");
let price = document.querySelector("#price");
let description = document.querySelector("#description");
let form = document.querySelector("form");

let BASE_URL = "http://localhost:8080/developments";
let cards = document.querySelector(".cards");

function detailsData() {
  let res = axios(BASE_URL);
  let data = res.data;
  cards.innerHTML = "";
  data.forEach((item) => {
    cards.innerHTML += `
        <div class="card" style="width:14rem;">
            <img class="card-img-top" src="assets/images/edit.png" alt="Card image cap">
            <div class="card-body">
            <h5 style='color:brown' class="card-title">${item.title}</h5>
            <hr>
            <p class="card-text">${item.text}</p>
            <p class="card-text">${item.price}</p>
            <a href="#" onclick=removeLocal('${item.id}') class="btn btn-primary">Remove fav</a>
            </div>
        </div>
        `;
  });
}
detailsData();

async function detailsFunc(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  profName.value = data.title;
  description.value = data.text;
  price.value = data.price;
}


detailsFunc(id);
