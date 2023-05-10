let cards=document.querySelector(".cards")
let card=document.querySelector(".card")
let deleteBtn=document.querySelector(".delete")
let editBtn=document.querySelector(".edit")
let addBtn=document.querySelector(".addBtn")

let BASE_URL ="https://northwind.vercel.app/api/categories"
// axios(BASE_URL).then((response)=>console.log(response.data))

function getAllUsers(){
    axios(BASE_URL)
      .then((response) => 
      response.data.forEach((item) => {
        cards.innerHTML += `
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
                <i class="fa-solid fa-pencil edit" style="color: #129900;"></i>
                <i class="fa-solid fa-trash-can delete" style="color: #e60000;" onclick=deleteUser(${item.id}, this)></i>
            </div>
          </div>
        </div>
        `;
      })
)}
getAllUsers()

function deleteUser(id,btn){
    axios.delete(`BASE_URL/${id}`)
    console.log(id)
    btn.parentElement.parentElement.remove()
    getAllUsers()
}
deleteUser()

addBtn.addEventListener("click", function(){
    window.location = "http://127.0.0.1:5500/addUsers.html";
})
