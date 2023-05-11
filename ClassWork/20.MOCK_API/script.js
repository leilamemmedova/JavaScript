let cards=document.querySelector(".cards")
let card=document.querySelector(".card")
let deleteBtn=document.querySelector(".delete")
let editBtn=document.querySelector(".edit")
let addBtn=document.querySelector(".addBtn")

let BASE_URL = "https://northwind.vercel.app/api/suppliers";
// axios(BASE_URL).then((response)=>console.log(response.data))

axios(BASE_URL)
  .then((response) => getAllUsers(response.data))


function getAllUsers(arr){
  cards.innerHTML=""
      arr.forEach((item) => {
        cards.innerHTML += `
            <div class="col col-6">
          <div class="card d-flex justify-content-between align-items-center m-3">
            <div class="left">
                <div class="row">
                    <span>${item.companyName}</span>
                </div>
                <div class="row">
                    <span>${item.contactTitle}</span>
                </div>
            </div>
            <div class="right">
                <a href="edit.html?id=${item.id}"><i class="fa-solid fa-pencil edit" style="color: #129900; cursor:pointer;"></i></a>
                <i class="fa-solid fa-trash-can delete" style="color: #e60000; cursor:pointer;" onclick=deleteUser("${item.id}")></i>
            </div>
          </div>
        </div>
        `;
      })
}

function deleteUser(id){
  axios.delete(`${BASE_URL}/${id}`)
  getAllUsers()
}

addBtn.addEventListener("click", function(){
    window.location = "addUsers.html";
})



