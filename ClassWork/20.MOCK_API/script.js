let cards=document.querySelector(".cards")
let card=document.querySelector(".card")
let deleteBtn=document.querySelector(".delete")
let editBtn=document.querySelector(".edit")
let addBtn=document.querySelector(".addBtn")

let BASE_URL = "http://localhost:8080/users";
// axios(BASE_URL).then((response)=>console.log(response.data))

async function getAllUsers(){
  const res= await axios(BASE_URL)
  const data =await res.data
  cards.innerHTML=""
      data.forEach((item) => {
        cards.innerHTML += `
            <div class="col col-6">
          <div class="card d-flex justify-content-between align-items-center m-3">
            <div class="left">
                <div class="row">
                    <span>${item.username}</span>
                </div>
                <div class="row">
                    <span>${item.email}</span>
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
getAllUsers()

async function deleteUser(id){
  await axios.delete(`${BASE_URL}/${id}`);
  getAllUsers()
}
addBtn.addEventListener("click", function(){
  window.location = "addUsers.html";
})

async function goToEditPage(userId) {
  window.location.href = `edit.html?id=${userId}`;
}



