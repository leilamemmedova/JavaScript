let cards = document.querySelector(".cards");

let BASE_URL = "http://localhost:8080/flowers";
let filtered = [];

let allFav = JSON.parse(localStorage.getItem("favData"));

async function getFavData() {
  cards.innerHTML=""
  allFav.forEach(el => {
    cards.innerHTML += `
        <div class="card" style="width:14rem;">
            <img class="card-img-top" src="${el.image}" alt="Card image cap">
        <div class="card-body">
            <h5 style='color:brown' class="card-title">${el.name}</h5>
            <hr>
            <p class="card-text">${el.price}</p>
            <a href="#" onclick=removeLocal('${el.id}') class="btn btn-primary">Remove fav</a>
        </div>
        </div>
    `;
  });
}
getFavData()
  

async function removeLocal(id){
    allFav=allFav.filter((item)=>item.id!=id)
    localStorage.setItem("favData", JSON.stringify(allFav))
    getFavData()
}