let cards= document.querySelector(".cards")

let BASE_URL = "http://localhost:8080/people";
let filtered=[]

let allFav=JSON.parse(localStorage.getItem("favData"))

async function getFavData(){
    cards.innerHTML=""
    allFav.forEach(item=> {
        cards.innerHTML += `
        <div class="card" style="width:14rem;">
        <img class="card-img-top" src="${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title">${item.name} ${item.age}</h5>
          <hr>
          <a href="#" onclick=removeLocal('${item.id}') class="btn btn-primary">Remove fav</a>
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


