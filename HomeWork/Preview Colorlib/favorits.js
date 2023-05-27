let cards = document.querySelector(".cards");

let allFav = JSON.parse(localStorage.getItem("favData"));

async function getAllFavData() {
  cards.innerHTML = "";
  allFav.forEach((item) => {
    cards.innerHTML += `
             <div class="col-lg-4 col-md-6 col-sm-12 my-4">
              <div class="care-card">
                <img src="./assets/images/${item.image}" alt="" />
                <h4 class="text-center">${item.name}</h4>
                <p class="text-center">
                  ${item.description}
                </p>
                <a href="#" onclick=removeLocal('${item.id}') class="btn btn-primary">Remove</a>
              </div>
            </div>
        `;
  });
}
getAllFavData();

async function removeLocal(id){
    allFav=allFav.filter((item)=> item.id != id)
    localStorage.setItem("favData", JSON.stringify(allFav))
    getAllFavData()
}