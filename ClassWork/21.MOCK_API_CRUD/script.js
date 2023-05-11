let form = document.querySelector("#userForm");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let submitBtn = document.querySelector("#submitBtn");
let search = document.querySelector("#searchInput");
let sort = document.querySelector("#thFirstName");
let thLastName = document.querySelector("#thLastName");
let tBody = document.querySelector("tbody");
let arrowUp = document.querySelector(".arrowUp");
let arrowDown = document.querySelector(".arrowDown");
let bool = false;

axios("http://localhost:8000/users").then((res) => {
  console.log(res.data);
  drawTable(res.data);
});

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((item) => {
    tBody.innerHTML += `
        <tr>
            <td>${item.username}</td>
            <td>${item.lastname}</td>
            <td>${item.email}</td>
            <td>
                <a class="btn btn-warning edit" onclick=editfunc("${item.id}") href="#">Edit</a>
                <button class="btn btn-danger delete" onclick=deletefunc("${item.id}")>Delete</button>
            </td>
        </tr>
        `;
  });
}

async function deletefunc(id) {
  await axios.delete(`http://localhost:8000/users/${id}`);
}

search.addEventListener("input", function (event) {
  axios("http://localhost:8000/users").then((res) => {
    let filtered = res.data.filter((item) => {
      return `${item.username} ${item.lastname}`
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    drawTable(filtered);
  });
});

sort.addEventListener("click", function () {
  bool = !bool;
  if (bool) {
    axios(`http://localhost:8000/users`).then((res) => {
      let sortData = res.data.sort((a, b) =>
        b.username.localeCompare(a.username)
      );
      drawTable(sortData);
    });
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline-block";
  } else {
    axios(`http://localhost:8000/users`).then((res) => {
      let sortData = res.data.sort((a, b) =>
        a.username.localeCompare(b.username)
      );
      drawTable(sortData);
    });
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";
  }
});

async function editfunc(id) {
  await axios(`http://localhost:8000/users/${id}`).then((res) => {
    firstName.value = res.data.username;
    lastName.value = res.data.lastname;
    email.value = res.data.email;
  });
  form.addEventListener("submit",async function (e) {
    e.preventDefault()
    let obj = {
      username: firstName.value,
      lastname: lastName.value,
      email: email.value,
    };
   await axios.patch(`http://localhost:8000/users/${id}`, obj);
  });
}
