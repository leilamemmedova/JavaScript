let cards=document.querySelector(".cards")
let card=document.querySelector(".card")

let BASE_URL ="https://northwind.vercel.app/api/categories"
axios(BASE_URL).then((response)=>console.log(response.data))

function getAllUsers(){
    BASE_URL.forEach(item => {
        cards.innerHTML +=`
            <div class="col col-6">
          <div class="card d-flex justify-content-between align-items-center m-3">
            <div class="left">
                <div class="row">
                    <span>${item.name}</span>
                </div>
                <div class="row">
                    <span>${item.description}</span>
                </div>
            </div>
            <div class="right">
                <i class="fa-solid fa-pencil" style="color: #129900;"></i>
                <i class="fa-solid fa-trash-can" style="color: #e60000;"></i>
            </div>
          </div>
        </div>
        `
    });
}
getAllUsers()