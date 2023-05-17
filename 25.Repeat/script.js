let tBody = document.querySelector("tbody");
let BASE_URL = "http://localhost:8080/users";

async function drawTable() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  console.log(data);
  tBody.innerHTML = "";
  data.forEach((item) => {
    tBody.innerHTML += `
          <tr>
              <td>${item.id}</td>
              <td><img src="./image/ego.jpg" alt="" /></td>
              <td>${item.name}</td>
              <td>${item.surname}</td>
              <td>${item.email}</td>
              <td>${item.date}</td>
              <td>
                <a href="" class="btn btn-success edit">Edit</a>
                <button class="btn btn-danger delete" onclick=deletefunc(${item.id})>Delete</button>
                <a href="" class="btn btn-primary">Add Fav</a>
              </td>
            </tr>  
        `;
  });
}
drawTable()

async function deletefunc(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}
