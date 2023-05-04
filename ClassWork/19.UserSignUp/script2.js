let users = JSON.parse(localStorage.getItem("users")) || [];
let boxes=document.querySelector(".boxes")

function boxesList() {
  let box = document.createElement("div");
  users.forEach(
      (item) =>{
      box.innerHTML += `
      <div class="box">
      <h1 class="text"> User</h1>
      <span>name: ${item.username}</span>
      <span>email:${item.email}</span>
      <button class="btn btn-danger deletebtn">delete</button>
      </div>
      `
      
      boxes.append(box);
      localStorage.setItem("users", JSON.stringify(users));
       } );

}
boxesList()

// addBtn.addEventListener("click", () => {
//   console.log('ss');
// });

