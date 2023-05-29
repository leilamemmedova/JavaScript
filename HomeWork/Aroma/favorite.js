let products = document.querySelector(".row");

let allFav = JSON.parse(localStorage.getItem("favData"));

async function getAllFavData() {
  products.innerHTML = "";
  allFav.forEach((item) => {
    products.innerHTML += `
        <div class="card d-flex align-items-center justify-content-center flex-direction-column" style="width:18rem;">
        <img class="card-img-top" src="./assets/images/${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title text-center">${item.name}</h5>
          <hr>
          <p class="card-text text-center">${item.category}</p>
          <p class="card-text text-center">$ ${item.price}</p>
          <br>
          <a href="#" onclick=removeLocal('${item.id}') class="btn btn-primary">Remove Favorits</a>
        </div>
        </div>
        `;
  });
}
getAllFavData();

function removeLocal(id){
  allFav=allFav.filter((item)=> item.id!=id)
  localStorage.setItem("favData", JSON.stringify(allFav))
  getAllFavData()
}
