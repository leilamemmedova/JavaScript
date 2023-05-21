const cards = document.querySelector(".cards");

let allFav = JSON.parse(localStorage.getItem("favData"));

function getLocalFavUser() {
  cards.innerHTML = "";
  allFav.forEach((user) => {
    cards.innerHTML += `
        <div class="card" style="width:14rem;">
        <img class="card-img-top" src="./image/alfredo.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title">${user.name} ${user.surname}</h5>
          <hr>
          <p class="card-text">${user.email}</p>
          <p class="card-text">${user.date}</p>
          <a href="#" onclick=removeLocal('${user.id}') class="btn btn-primary">Remove fav</a>
        </div>
        </div>
  `;
  });
}
getLocalFavUser()

function removeLocal(id){
    allFav=allFav.filter((item)=>item.id!=id)
    localStorage.setItem("favData", JSON.stringify(allFav))
    getLocalFavUser()
}