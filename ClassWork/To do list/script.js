let form = document.querySelector(".app-form");
let text = document.querySelector("#text");
let addBtn = document.querySelector(".addbtn");
let listgroup = document.querySelector(".list-group");
let edit = document.querySelector(".edit");
let deleteBtn = document.querySelector(".delete");

let arr = JSON.parse(localStorage.getItem("data")) || [];

function lists() {
  listgroup.innerHTML = "";
  arr.forEach(
    (item) =>
      (listgroup.innerHTML += `
      <li><input type="checkbox">
      <span>${item.text}</span>
      <div>
      <button class="edit">Edit</button>
      <button class="delete" onclick=removeData(${item.id})>Delete</button> 
      </div></li>
      `)
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let object = {
    id: Math.floor(Math.random() * 1000),
    text: text.value,
  };
  if (text.value) {
    arr.push(object);
    localStorage.setItem("data", JSON.stringify(arr));
  }

  lists(arr);
});

function removeData(id) {
  arr = arr.filter((item) => item.id != id);
  localStorage.setItem("data", JSON.stringify(arr));
  lists(arr);
}

function editData(id){
    // arr=arr.filter((item)=>item.id !=id)
    
}

