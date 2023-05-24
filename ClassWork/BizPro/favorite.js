let cards= document.querySelector(".cards")

let allFav= JSON.parse(localStorage.getItem("favData"))

function getAllFavData(){
    cards.innerHTML=""
    allFav.forEach((item)=>{
        cards.innerHTML += `
        <div class="card" style="width:14rem;">
            <iqqqq                                                                                                                                                                                                                                                                                                                                                              mg class="card-img-top" src="assets/images/edit.png" alt="Card image cap">
            <div class="card-body">
            <h5 style='color:brown' class="card-title">${item.title}</h5>
            <hr>
            <p class="card-text">${item.text}</p>
            <p class="card-text">${item.price}</p>
            <a href="#" onclick=removeLocal('${item.id}') class="btn btn-primary">Remove fav</a>
            </div>
        </div>
        `;
    })
}
getAllFavData()

async function removeLocal(id){
    allFav=allFav.filter((item)=> item.id!=id)
    localStorage.setItem("favData",JSON.stringify(allFav))
    getAllFavData()
}



